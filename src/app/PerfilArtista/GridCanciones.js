"use client";
import { useState, useEffect } from "react";
import CardCanciones from "./CardCanciones";

export default function GridCanciones({ size = "small", artistaId: id_artista }) {
  const [canciones, setCanciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarCanciones = async () => {
      try {
        // Llamamos a nuestra nueva API pasándole el ID del artista
        const url = id_artista ? `/api/Canciones?artista_id=${id_artista}` : '/api/Canciones';
        const respuesta = await fetch(url);
        
        if (respuesta.ok) {
          const datos = await respuesta.json();
          setCanciones(datos);
        } else {
          console.error("Fallo al cargar la API de canciones");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarCanciones();
  }, [id_artista]); // El efecto se vuelve a ejecutar si cambia el ID del artista

  if (cargando) {
    return <p className="text-center w-full text-gray-400">Cargando canciones...</p>;
  }

  if (canciones.length === 0) {
    return <p className="text-center w-full text-gray-400">No hay canciones registradas para este artista.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
      {canciones.map((cancion, index) => (
        <CardCanciones
          key={index}
          {...cancion}
          size={size}
        />
      ))}
    </div>
  );
}