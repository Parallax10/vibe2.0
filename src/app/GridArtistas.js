"use client";
import { useState, useEffect } from "react";
import CardArtistas from "./CardArtistas";

export default function GridArtistas({ modo, size = "small" }) {
    // 1. Creamos el estado para guardar los artistas de la base de datos
    const [artistas, setArtistas] = useState([]);
    const [cargando, setCargando] = useState(true); // Para mostrar un mensaje mientras cargan

    // 2. Usamos useEffect para ir a buscar los datos nada más cargar la página
    useEffect(() => {
        const cargarArtistas = async () => {
        try {
            const respuesta = await fetch('/api/artistas');
            if (respuesta.ok) {
            const datos = await respuesta.json();
            setArtistas(datos); // Guardamos los datos de Supabase en nuestro estado
            } else {
            console.error("Fallo al cargar la API");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
        } finally {
            setCargando(false); // Ya terminamos de cargar (con éxito o error)
        }
        };

        cargarArtistas();
    }, []);

    // 3. Mientras esperamos a Supabase, mostramos esto:
    if (cargando) {
        return <p className="text-center mt-10">Cargando artistas...</p>;
    }

    // 4. Lógica original que ya tenías para agrupar
    const generos = [...new Set(artistas.map(a => a.genero))].sort();
    const paises = [...new Set(artistas.map(a => a.pais))].sort();

    // 5. Renderizados dependiendo del "modo"
    if (modo === "genero") {
        return (
        <div>
            {generos.map((genero, index) => (
            <div key={index}>
                <h2 className="text-2xl mb-4">{genero}</h2>
                <div className="flex flex-col gap-6 justify-center m-5">
                {artistas.filter(a => a.genero === genero).map((artista, i) => (
                    <CardArtistas key={i} {...artista} size={size} />
                ))}
                </div>
            </div>
            ))}
        </div>
        );
    }

    if (modo === "pais") {
        return (
        <div>
            {paises.map((pais, index) => (
            <div key={index}>
                <h2 className="text-2xl mb-4">{pais}</h2>
                <div className="flex flex-col gap-6 justify-center m-5">
                {artistas
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

    // Vista por defecto (Grid)
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {artistas.map((artista, index) => (
            <CardArtistas key={index} {...artista} size={size} />
        ))}
        </div>
    );
    }