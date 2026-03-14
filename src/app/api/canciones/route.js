import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artistaId = searchParams.get('artista_id');
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

export async function POST(request) {
  const body = await request.json();

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ error: "Faltan datos obligatorios para crear la canción" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('Canciones')
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}