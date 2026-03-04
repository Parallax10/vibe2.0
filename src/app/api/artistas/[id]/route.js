import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET(request, { params }) {
  // NEXT.JS 15: Tenemos que esperar a que los params se resuelvan en el backend también
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