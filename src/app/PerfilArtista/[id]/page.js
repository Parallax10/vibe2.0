"use client"
import GridCanciones from "../GridCanciones"; 
import NavBar from "../../navBar"; 
import { useState, useEffect, use } from "react"; 

export default function PerfilArtista({ params }) {
    const resolvedParams = use(params);
    const idArtista = resolvedParams.id; 

    const [artista, setArtista] = useState(null);
    const [cargando, setCargando] = useState(true);
    // ESTADO PARA FAVORITOS
    const [esFavorito, setEsFavorito] = useState(false);

    // USUARIO DE PRUEBA (Cámbialo cuando tengas el login listo)
    const idUsuarioActual = 1; 

    useEffect(() => {
        const cargarDatosArtista = async () => {
            try {
                // 1. Cargar el artista
                const resArtista = await fetch(`/api/artistas/${idArtista}`);
                if (resArtista.ok) setArtista(await resArtista.json());

                // 2. Comprobar si ya es favorito
                const resFav = await fetch('/api/favoritos', {
                    method: 'POST',
                    body: JSON.stringify({ id_usuario: idUsuarioActual, id_item: idArtista, tipo: 'artista', accion: 'check' })
                });
                if (resFav.ok) {
                    const dataFav = await resFav.json();
                    setEsFavorito(dataFav.isFavorito);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setCargando(false);
            }
        };

        cargarDatosArtista();
    }, [idArtista]);

    // FUNCIÓN PARA HACER CLIC EN EL BOTÓN
    const toggleFavorito = async () => {
        const res = await fetch('/api/favoritos', {
            method: 'POST',
            body: JSON.stringify({ id_usuario: idUsuarioActual, id_item: idArtista, tipo: 'artista', accion: 'toggle' })
        });
        if (res.ok) {
            const data = await res.json();
            setEsFavorito(data.isFavorito);
        }
    };

    if (cargando) return <div className="min-h-screen bg-black text-white flex justify-center items-center">Cargando perfil...</div>;
    if (!artista) return <div className="min-h-screen bg-black text-white flex justify-center items-center">Artista no encontrado</div>;

    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar></NavBar>
            <div className="flex flex-col sm:flex-row mt-4">
                <aside className="w-full sm:w-72 bg-zinc-900 p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
                    <img src={artista.img} alt={artista.nombre} className="w-1/2 sm:w-full mx-auto rounded-md mb-6" />
                    <div className="space-y-3 text-sm">
                        <p className="font-bold">NOMBRE :</p>
                        <p className="text-gray-300 uppercase">{artista.nombre}</p>
                        <p className="font-bold">GÉNERO :</p>
                        <p className="text-gray-300 uppercase">{artista.genero}</p>
                        
                        {/* BOTÓN DINÁMICO DE FAVORITOS */}
                        <button 
                            onClick={toggleFavorito}
                            className={`mt-4 w-full py-2 rounded-md transition font-bold ${
                                esFavorito ? 'bg-zinc-600 hover:bg-zinc-500 text-white' : 'bg-red-700 hover:bg-red-600 text-white'
                            }`}
                        >
                            {esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        </button>
                    </div>
                </aside>
                <main className="flex-1 px-4 sm:px-6 py-4">
                    <div className="mb-6">
                        <img src={artista.img_Banner || "/imagenes/adoBanner.png"} alt="Banner" className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">CANCIONES</h2>
                        <GridCanciones size="large" artistaId={idArtista} artistaNombre={artista.nombre} />
                    </div>
                </main>
            </div>
        </div>
    );
}