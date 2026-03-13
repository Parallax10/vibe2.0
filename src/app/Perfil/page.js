"use client";
import NavBar from "../navBar";
import CardArtistas from "../CardArtistas";
import CardCanciones from "../PerfilArtista/CardCanciones";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Perfil() {
    const [perfil, setPerfil] = useState({ usuario: null, artistas: [], canciones: [] });
    const [cargando, setCargando] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const cargarPerfil = async () => {
            const usuarioGuardado = localStorage.getItem('usuarioVibe');
            
            if (!usuarioGuardado) {
                router.push('/Login');
                return;
            }

            const usuarioObj = JSON.parse(usuarioGuardado);

            try {
                const respuesta = await fetch(`/api/perfil?id=${usuarioObj.id}`);
                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setPerfil(datos);
                } else {
                    console.error("Fallo al cargar el perfil de la base de datos.");
                }
            } catch (error) {
                console.error("Error de red:", error);
            } finally {
                setCargando(false);
            }
        };
        cargarPerfil();
    }, [router]);

    if (cargando) return <div className="min-h-screen bg-black text-white flex justify-center items-center font-bold">Cargando tu vibra musical...</div>;
    if (!perfil.usuario) return <div className="min-h-screen bg-black text-white flex justify-center items-center">Usuario no encontrado</div>;

    const { usuario, artistas, canciones } = perfil;

    return (
        <div className="min-h-screen bg-black text-white pb-10">
            <NavBar />
            
            <div className="flex flex-col sm:flex-row mt-4">
                <aside className="w-full sm:w-72 bg-zinc-900 p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
                    <img 
                        src={usuario.FtoPerfil || "/imagenes/pfp.png"} 
                        alt="Foto de perfil" 
                        className="w-1/2 sm:w-full mx-auto rounded-md mb-6 object-cover aspect-square" 
                    />
                    <div className="space-y-3 text-sm">
                        <p className="font-bold">NOMBRE :</p>
                        <p className="text-gray-300 uppercase">{usuario.Nombre || "Usuario Vibe"}</p>
                        
                        <p className="font-bold">CORREO :</p>
                        <p className="text-gray-300 break-words">{usuario.Correo}</p>
                        
                        <p className="font-bold">PRIVACIDAD :</p>
                        <p className="text-gray-300 uppercase">{usuario.Privacidad || "Público"}</p>

                        <button 
                            onClick={() => router.push('/ConfiguracionPerfil')}
                            className="mt-4 w-full py-2 rounded-md transition font-bold bg-green-600 hover:bg-green-700 text-white"
                        >
                            Editar perfil
                        </button>
                    </div>
                </aside>

                <main className="flex-1 px-4 sm:px-6 py-4">
                    <div className="mb-6">
                        <img 
                            src={usuario.FtoBanner || "/imagenes/banner.jpg"} 
                            alt="Banner" 
                            className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg" 
                        />
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">ARTISTAS FAVORITOS</h2>
                        {artistas.length === 0 ? (
                            <p className="text-gray-400 italic mt-2">Aún no tienes artistas favoritos.</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
                                {artistas.map((artista, index) => (
                                    <CardArtistas key={index} {...artista} size="small" />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">CANCIONES FAVORITAS</h2>
                        {canciones.length === 0 ? (
                            <p className="text-gray-400 italic mt-2">Aún no tienes canciones favoritas.</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
                                {canciones.map((cancion, index) => (
                                    <CardCanciones key={index} {...cancion} size="small" />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}