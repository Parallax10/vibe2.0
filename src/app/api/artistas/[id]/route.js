import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const idDelArtista = resolvedParams.id;

  const { data, error } = await supabase
    .from('Artistas')
    .select('*')
    .eq('id', idDelArtista)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
export async function PUT(request, { params }) {
  const resolvedParams = await params;
  const idDelArtista = resolvedParams.id;
  const body = await request.json();

  const { data, error } = await supabase
    .from('Artistas')
    .update(body)
    .eq('id', idDelArtista)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}