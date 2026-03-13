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

  const { data, error } = await supabase
    .from('Canciones')
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}