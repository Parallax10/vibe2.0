"use client";

export default function CardCanciones({ titulo, genero, img, size = "small" }) {

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
    <img src={img} alt={titulo} width={imgSize} height={imgSize} className="mb-3"/>
    <p className="font-semibold text-2xl">{titulo}</p>
    <p className="text-1xl">Genero: {genero}</p>
</div>
);
}
