import { NextResponse } from 'next/server';
// CORRECCIÓN: Apuntamos a tu carpeta utils donde realmente está supabase.js
import { supabase } from '@/app/utils/supabase'; 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artistaId = searchParams.get('artista_id');

  // La tabla sí lleva mayúscula, esto está bien
  let query = supabase.from('Canciones').select('*'); 

  if (artistaId) {
    query = query.eq('id_artista', artistaId); 
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json(data, { status: 200 });
}