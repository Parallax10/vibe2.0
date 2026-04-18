"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function CardCanciones({ id, titulo, artistaNombre, portada, size = "small" }) {
  const [esFavorito, setEsFavorito] = useState(false);
  const [idUsuarioActual, setIdUsuarioActual] = useState(null);
  const { isAdmin } = useAuth();
  const router = useRouter();

  const cardSize = size === "large"
    ? "w-64 h-80 p-6 text-base"
    : "w-40 h-64 p-4 text-sm";

  const imgSize = size === "large" ? 120 : 80;

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuarioVibe');
    if (usuarioGuardado) {
      const usuarioObj = JSON.parse(usuarioGuardado);
      setIdUsuarioActual(usuarioObj.id);
    }
  }, []);

  useEffect(() => {
    if (id && idUsuarioActual) {
      fetch('/api/favoritos', {
        method: 'POST',
        body: JSON.stringify({ id_usuario: idUsuarioActual, id_item: id, tipo: 'cancion', accion: 'check' })
      })
        .then(res => res.json())
        .then(data => setEsFavorito(data.isFavorito))
        .catch(err => console.error(err));
    }
  }, [id, idUsuarioActual]);

  const toggleFavorito = async (e) => {
    e.preventDefault();
    
    if (!idUsuarioActual) {
      alert("Debes iniciar sesión para añadir a favoritos");
      return;
    }

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
          onClick={() => router.push(`/ModificarCancion?id=${id}`)}
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
        className="mb-3 rounded-md object-cover aspect-square"
      />

      <div className="w-full flex flex-col items-center mt-2 overflow-hidden">
        <p className="text-gray-400 text-xs uppercase font-bold">Nombre:</p>
        <p className="font-semibold text-lg text-white mb-2 truncate w-full" title={titulo}>{titulo}</p>

        <p className="text-gray-400 text-xs uppercase font-bold">Artista:</p>
        <p className="font-semibold text-md text-white truncate w-full" title={artistaNombre}>{artistaNombre}</p>
      </div>
    </div>
  );
}