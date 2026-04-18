import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET(request, { params }) {
    const resolvedParams = await params;
    
    const { data, error } = await supabase
        .from('Canciones')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}

export async function PUT(request, { params }) {
    const resolvedParams = await params;
    const body = await request.json();

    if (!body || Object.keys(body).length === 0) {
        return NextResponse.json({ error: "No se proporcionaron datos para actualizar" }, { status: 400 });
    }

    const { data, error } = await supabase
        .from('Canciones')
        .update(body)
        .eq('id', resolvedParams.id)
        .select();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}

export async function DELETE(request, { params }) {
    const resolvedParams = await params;

    const { error } = await supabase
        .from('Canciones')
        .delete()
        .eq('id', resolvedParams.id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ mensaje: "Canción eliminada correctamente" }, { status: 200 });
}