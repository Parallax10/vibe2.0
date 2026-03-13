import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const idUsuario = searchParams.get('id');
    try {
        const { data: usuario, error: errUser } = await supabase
            .from('Usuarios')
            .select('*')
            .eq('id', idUsuario)
            .single();

        if (errUser) throw errUser;

        const { data: favArtistas } = await supabase.from('Favoritos_Artistas').select('id_artista').eq('id_usuario', idUsuario);
        const idsArtistas = favArtistas?.map(f => f.id_artista) || [];

        let artistas = [];
        if (idsArtistas.length > 0) {
            const { data } = await supabase.from('Artistas').select('*').in('id', idsArtistas);
            artistas = data || [];
        }

        const { data: favCanciones } = await supabase.from('Favoritos_Canciones').select('id_cancion').eq('id_usuario', idUsuario);
        const idsCanciones = favCanciones?.map(f => f.id_cancion) || [];

        let canciones = [];
        if (idsCanciones.length > 0) {
            const { data: dataCanciones } = await supabase.from('Canciones').select('*').in('id', idsCanciones);

            if (dataCanciones && dataCanciones.length > 0) {
                const artistaIds = [...new Set(dataCanciones.map(c => c.id_artista))];
                const { data: artistasNombres } = await supabase.from('Artistas').select('id, nombre').in('id', artistaIds);

                canciones = dataCanciones.map(cancion => {
                    const artista = artistasNombres?.find(a => a.id === cancion.id_artista);
                    return {
                        ...cancion,
                        artistaNombre: artista ? artista.nombre : "Desconocido"
                    };
                });
            }
        }

        return NextResponse.json({ usuario, artistas, canciones }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}
export async function PUT(request) {
    const { searchParams } = new URL(request.url);
    const idUsuario = searchParams.get('id');
    const body = await request.json();

    try {
        const { data, error } = await supabase
            .from('Usuarios')
            .update(body)
            .eq('id', idUsuario)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}