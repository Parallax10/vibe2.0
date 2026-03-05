import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function POST(request) {
  try {
      const { id_usuario, id_item, tipo, accion } = await request.json();
      
      // Asegúrate de que estos nombres sean EXACTAMENTE iguales a como están en Supabase
      const tabla = tipo === 'artista' ? 'Favoritos_Artistas' : 'Favoritos_Canciones';
      const columnaItem = tipo === 'artista' ? 'id_artista' : 'id_cancion';

      console.log(`--- INTENTANDO ACCIÓN: ${accion} EN LA TABLA: ${tabla} ---`);

      if (accion === 'check') {
         const { data, error } = await supabase.from(tabla).select('*').eq('id_usuario', id_usuario).eq(columnaItem, id_item).single();
         if (error && error.code !== 'PGRST116') console.error("Error al hacer check:", error); // PGRST116 es "no encontrado", es normal
         return NextResponse.json({ isFavorito: !!data }, { status: 200 });
      }

      if (accion === 'toggle') {
         const { data: existeData } = await supabase.from(tabla).select('*').eq('id_usuario', id_usuario).eq(columnaItem, id_item).single();
         
         if (existeData) {
             console.log("El favorito ya existe. Procediendo a BORRARLO...");
             const { error: deleteError } = await supabase.from(tabla).delete().eq('id', existeData.id);
             if (deleteError) {
                 console.error("ERROR DE SUPABASE AL BORRAR:", deleteError);
                 return NextResponse.json({ error: deleteError.message }, { status: 500 });
             }
             return NextResponse.json({ isFavorito: false }, { status: 200 });
         } else {
             console.log("El favorito NO existe. Procediendo a CREARLO...");
             const { error: insertError } = await supabase.from(tabla).insert([{ id_usuario: id_usuario, [columnaItem]: id_item }]);
             if (insertError) {
                 console.error("ERROR DE SUPABASE AL INSERTAR:", insertError);
                 return NextResponse.json({ error: insertError.message }, { status: 500 });
             }
             return NextResponse.json({ isFavorito: true }, { status: 200 });
         }
      }
  } catch (error) {
      console.error("Error general en la API:", error);
      return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}