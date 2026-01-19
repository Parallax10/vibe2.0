"use client";

import CardCancion from "./CardCanciones";

const canciones = [
{
titulo: "unravel",
genero: "J-Rock",
img: "/imagenes/unravel.png"
},
{
titulo: "Rockstar",
genero: "J-Rock",
img: "/imagenes/adobum.png"
}
];

export default function GridCanciones() {
return (
<div>
    {canciones.map((cancion, index) => (
    <CardCancion
        key={index}
        titulo={cancion.titulo}
        genero={cancion.genero}
        img={cancion.img}
    />
    ))}
</div>
);
}