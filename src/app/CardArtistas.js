"use client";

export default function CardArtistas({ nombre, pais, genero, img, size = "small" }) {

const cardSize =
size === "large"
    ? "w-48 h-64 p-4 text-sm sm:w-64 sm:h-80 sm:p-6 sm:text-base"
    : "w-32 p-3 text-xs sm:w-40 sm:p-4 sm:text-sm";


const imgSize =
size === "large"
    ? 120
    : 80;

return (
<div className={`flex flex-col justify-between items-center bg-fondoNavbar rounded shadow-md text-center ${cardSize}`}>

    <img src={img}alt={nombre}width={imgSize}height={imgSize}className="mb-3"/>
    <p className="font-semibold text-2xl">{nombre}</p>
    <p className="text-1xl">País:{pais}</p>
    <p className="text-1xl">Género:{genero}</p>
</div>
);
}
