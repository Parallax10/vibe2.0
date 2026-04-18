import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function POST(request) {
    try {
        const { username, password, email } = await request.json();

        if (!username || !password || !email) {
            return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('Usuarios')
            .insert([
                {
                    Nombre: username,
                    Correo: email,
                    Contraseña: password,
                    FtoPerfil: "",
                    FtoBanner: "",
                    admin: false
                }
            ]);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ mensaje: "Usuario creado exitosamente" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}