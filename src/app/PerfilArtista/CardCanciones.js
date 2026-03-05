"use client";

export default function CardCanciones({ titulo, artistaNombre, portada, size = "small" }) {
  const cardSize = size === "large" ? "w-64 h-80 p-6 text-base" : "w-40 p-4 text-sm";
  const imgSize = size === "large" ? 120 : 80;

  return (
    <div className={`flex flex-col justify-start items-center bg-zinc-800 rounded shadow-md text-center ${cardSize}`}>
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