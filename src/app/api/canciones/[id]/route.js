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

    const { data, error } = await supabase
        .from('Canciones')
        .update(body)
        .eq('id', resolvedParams.id)
        .select();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 200 });
}