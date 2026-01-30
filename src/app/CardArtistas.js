"use client";

export default function CardArtistas({ nombre, pais, genero, img, size = "small" }) {

const cardSize =
size === "large"
    ? "w-64 h-80 p-6 text-base"
    : "w-40 p-4 text-sm";


const imgSize =
size === "large"
    ? 120
    : 80;

return (
<div className={`flex flex-col justify-between items-center bg-fondoNavbar rounded shadow-md text-center ${cardSize}`}>

    <img
    src={img}
    alt={nombre}
    width={imgSize}
    height={imgSize}
    className="mb-3"
    />
    <p className="font-semibold text-2xl">{nombre}</p>
    <p className="text-2xl">País: {pais}</p>
    <p className="text-2xl">Género: {genero}</p>
</div>
);
}
