"use client";
import { useState, useEffect } from "react";
import CardCanciones from "./CardCanciones";

export default function GridCanciones({ size = "small", artistaId, artistaNombre }) {
  const [canciones, setCanciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarCanciones = async () => {
      try {
        const url = artistaId ? `/api/canciones?artista_id=${artistaId}` : '/api/canciones';
        const respuesta = await fetch(url);
        
        if (respuesta.ok) {
          const datos = await respuesta.json();
          setCanciones(Array.isArray(datos) ? datos : []);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarCanciones();
  }, [artistaId]);

  if (cargando) return <p className="text-center w-full text-gray-400">Cargando canciones...</p>;
  if (canciones.length === 0) return <p className="text-center w-full text-gray-400">No hay canciones registradas.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
      {canciones.map((cancion, index) => (
        <CardCanciones
          key={index}
          {...cancion}
          artistaNombre={artistaNombre} // Pasamos el nombre del artista a la tarjeta
          size={size}
        />
      ))}
    </div>
  );
}