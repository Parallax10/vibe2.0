import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase'; // Ajusta la ruta a tu supabase.js

export async function GET() {
  // Le pedimos todos los registros de la tabla 'artistas'
  const { data, error } = await supabase.from('Artistas').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Devolvemos el array de artistas al frontend
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from('Artistas')
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}