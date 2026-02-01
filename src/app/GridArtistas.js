"use client";
import CardArtistas from "./CardArtistas";

const artistas = [
{ nombre: "AC/DC", pais: "Australia", genero: "Rock", img: "/imagenes/ACDC.png" },
{ nombre: "Band-Maid", pais: "Japón", genero: "J-Rock", img: "/imagenes/MAIDBAND.png" },
{ nombre: "Linkin Park", pais: "EE.UU", genero: "Nu-Metal", img: "/imagenes/Linkin.png" },
{ nombre: "Ado", pais: "Japón", genero: "J-Rock", img: "/imagenes/ADO.png" }
];

export default function GridArtistas({ modo, size = "small" }) {

const generos = [...new Set(artistas.map(a => a.genero))].sort();
const paises = [...new Set(artistas.map(a => a.pais))].sort();

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

return (
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
    {artistas.map((artista, index) => (
    <CardArtistas key={index} {...artista} size={size} />
    ))}
</div>
);
}
