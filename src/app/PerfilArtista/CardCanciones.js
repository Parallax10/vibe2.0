"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // <-- Añadimos esto
import { useAuth } from "../context/AuthContext";

export default function CardCanciones({ id, titulo, artistaNombre, portada, size = "small" }) {
  const [esFavorito, setEsFavorito] = useState(false);
  const { isAdmin } = useAuth();
  const router = useRouter(); // <-- Inicializamos router
  const idUsuarioActual = 1;

  const cardSize = size === "large" ? "w-64 h-80 p-6 text-base" : "w-40 p-4 text-sm";
  const imgSize = size === "large" ? 120 : 80;

  useEffect(() => {
    if (id) {
      fetch('/api/favoritos', {
        method: 'POST',
        body: JSON.stringify({ id_usuario: idUsuarioActual, id_item: id, tipo: 'cancion', accion: 'check' })
      })
        .then(res => res.json())
        .then(data => setEsFavorito(data.isFavorito))
        .catch(err => console.error(err));
    }
  }, [id]);

  const toggleFavorito = async () => {
    const res = await fetch('/api/favoritos', {
      method: 'POST',
      body: JSON.stringify({ id_usuario: idUsuarioActual, id_item: id, tipo: 'cancion', accion: 'toggle' })
    });
    if (res.ok) {
      const data = await res.json();
      setEsFavorito(data.isFavorito);
    }
  };

  return (
    <div className={`relative flex flex-col justify-start items-center bg-zinc-800 rounded shadow-md text-center group ${cardSize}`}>

      {isAdmin && (
        <button
          onClick={() => router.push(`/ModificarCancion?id=${id}`)} // <-- Redirige enviando el id de la canción
          className="absolute top-3 left-3 text-xl hover:scale-110 transition-transform z-10 drop-shadow-lg"
          title="Editar canción"
        >
          ✏️
        </button>
      )}

      <button
        onClick={toggleFavorito}
        className="absolute top-3 right-3 text-2xl hover:scale-110 transition-transform z-10 drop-shadow-lg"
        title="Añadir a favoritos"
      >
        {esFavorito ? '❤️' : '🤍'}
      </button>

      <img
        src={portada || "/imagenes/Logo.png"}
        alt={titulo}
        width={imgSize}
        height={imgSize}
        className="mb-3 rounded-md object-cover"
      />

      <div className="w-full flex flex-col items-center mt-2">
        <p className="text-gray-400 text-xs uppercase font-bold">Nombre:</p>
        <p className="font-semibold text-lg text-white mb-2">{titulo}</p>

        <p className="text-gray-400 text-xs uppercase font-bold">Artista:</p>
        <p className="font-semibold text-md text-white">{artistaNombre}</p>
      </div>
    </div>
  );
}