"use client";

import CardCanciones from "./CardCanciones";

const canciones = [
{ titulo: "unravel", genero: "J-Rock", img: "/imagenes/unravel.png" },
{ titulo: "Rockstar", genero: "J-Rock", img: "/imagenes/adobum.png" },
];

export default function GridCanciones({ size = "small" }) {
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
