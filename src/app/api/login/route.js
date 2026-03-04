import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function POST(request) {
    // 1. Recibimos el nombre de usuario y la contraseña desde tu frontend
    const { username, password } = await request.json();

    // 2. Buscamos en la tabla 'usuarios' una fila que coincida exactamente
    const { data, error } = await supabase
        .from('Usuarios') // <-- Asegúrate de que tu tabla se llame así
        .select('*')
        .eq('Nombre', username) // Filtramos donde la columna username sea igual al username recibido
        .eq('Contraseña', password) // Y donde la columna password sea igual a la password recibida
        .single(); // Le decimos que solo esperamos encontrar a UNA persona, no un array.

    // 3. Manejo de errores de la base de datos (por si se cae la conexión, etc.)
    if (error && error.code !== 'PGRST116') { 
        // PGRST116 es el código de error de Supabase cuando no encuentra resultados en un .single()
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 4. Si 'data' es nulo, significa que no encontró a nadie con ese usuario y contraseña
    if (!data) {
        return NextResponse.json(
        { error: "Nombre de usuario o contraseña incorrectos" }, 
        { status: 401 }
        );
    }

    // 5. ¡Éxito! Encontramos al usuario. Lo devolvemos al frontend.
    return NextResponse.json({ usuario: data }, { status: 200 });
}