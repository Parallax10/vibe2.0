import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function POST(request) {
    const { username, password } = await request.json();

    const { data, error } = await supabase
        .from('Usuarios') 
        .select('*')
        .eq('Nombre', username) 
        .eq('Contraseña', password) 
        .single(); 
    if (error && error.code !== 'PGRST116') { 
        
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    
    if (!data) {
        return NextResponse.json(
        { error: "Nombre de usuario o contraseña incorrectos" }, 
        { status: 401 }
        );
    }

    
    return NextResponse.json({ usuario: data }, { status: 200 });
}