import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET() {
  const { data, error } = await supabase.from('Artistas').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();

  if (!body || !body.Nombre) {
    return NextResponse.json({ error: "Faltan datos obligatorios para crear el artista" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('Artistas')
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}