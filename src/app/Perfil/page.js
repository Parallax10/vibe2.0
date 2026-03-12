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
            
            <div className="relative w-full h-48 sm:h-64 bg-zinc-800">
                <img 
                    src={usuario.FtoBanner || "/imagenes/banner.jpg"} 
                    alt="Banner de usuario" 
                    className="w-full h-full object-cover opacity-60"
                />
                
                <div className="absolute -bottom-12 sm:-bottom-16 left-4 sm:left-10 flex items-end gap-4">
                    <img 
                        src={usuario.FtoPerfil || "/imagenes/pfp.png"} 
                        alt="Foto de perfil" 
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-black object-cover bg-zinc-900 shadow-xl"
                    />
                    <div className="mb-2 sm:mb-4 drop-shadow-lg">
                        <h1 className="text-3xl sm:text-5xl font-bold">{usuario.Nombre || "Usuario Vibe"}</h1>
                    </div>
                </div>
            </div>

            <div className="mt-20 sm:mt-24 px-4 sm:px-10">
                <div className="mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-6">ARTISTAS FAVORITOS</h2>
                    {artistas.length === 0 ? (
                        <p className="text-gray-400 italic">Aún no tienes artistas favoritos.</p>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                            {artistas.map((artista, index) => (
                                <CardArtistas key={index} {...artista} size="small" />
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-6">CANCIONES FAVORITAS</h2>
                    {canciones.length === 0 ? (
                        <p className="text-gray-400 italic">Aún no tienes canciones favoritas.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {canciones.map((cancion, index) => (
                                <CardCanciones key={index} {...cancion} size="small" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}