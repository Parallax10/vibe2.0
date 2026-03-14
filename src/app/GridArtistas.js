"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CardArtistas from "./CardArtistas";

export default function GridArtistas({ modo, size = "small" }) {
    const [artistas, setArtistas] = useState([]);
    const [cargando, setCargando] = useState(true); 
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    
    useEffect(() => {
        const cargarArtistas = async () => {
            try {
                const respuesta = await fetch(`/api/artistas?t=${Date.now()}`, { cache: 'no-store' });
                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setArtistas(datos); 
                }
            } catch (error) {
            } finally {
                setCargando(false); 
            }
        };

        cargarArtistas();
    }, []);

    if (cargando) {
        return <p className="text-center mt-10">Cargando artistas...</p>;
    }

    let artistasFiltrados = artistas.filter(a => 
        a.nombre && a.nombre.toLowerCase().includes(searchQuery)
    );

    if (modo === "genero") {
        const generos = [...new Set(artistasFiltrados.map(a => a.genero))].sort();
        return (
        <div>
            {generos.map((genero, index) => (
            <div key={index}>
                <h2 className="text-2xl mb-4">{genero}</h2>
                <div className="flex flex-col gap-6 justify-center m-5">
                {artistasFiltrados.filter(a => a.genero === genero).map((artista, i) => (
                    <CardArtistas key={i} {...artista} size={size} />
                ))}
                </div>
            </div>
            ))}
        </div>
        );
    }

    if (modo === "pais") {
        const paises = [...new Set(artistasFiltrados.map(a => a.pais))].sort();
        return (
        <div>
            {paises.map((pais, index) => (
            <div key={index}>
                <h2 className="text-2xl mb-4">{pais}</h2>
                <div className="flex flex-col gap-6 justify-center m-5">
                {artistasFiltrados
                    .filter(a => a.pais === pais)
                    .map((artista, i) => (
                    <CardArtistas key={i} {...artista} size={size} />
                ))}
                </div>
            </div>
            ))}
        </div>
        );
    }

    if (modo === "recientes") {
        const hoy = new Date();
        
        artistasFiltrados = artistasFiltrados.filter(a => {
            const fechaCampo = a.añadido || a.Añadido;
            if (!fechaCampo) return false;

            const fechaAñadido = new Date(fechaCampo);
            const diferenciaMs = hoy.getTime() - fechaAñadido.getTime();
            const diferenciaDias = diferenciaMs / (1000 * 3600 * 24);
            
            return diferenciaDias >= 0 && diferenciaDias <= 3;
        });

        if (artistasFiltrados.length === 0) {
            return <p className="text-center mt-10 text-gray-400">No hay artistas añadidos recientemente.</p>;
        }
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {artistasFiltrados.length > 0 ? (
            artistasFiltrados.map((artista, index) => (
                <CardArtistas key={index} {...artista} size={size} />
            ))
        ) : (
            <p className="col-span-full text-center mt-10 text-gray-400">No se encontraron artistas.</p>
        )}
        </div>
    );
}