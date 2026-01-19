"use client";

export default function CardArtistas({ nombre, pais, genero, img }) {
return (
<div className="flex flex-wrap items-center justify-center bg-fondoNavbar p-4 rounded shadow-md w-40 text-center">
    <div>
        <img src={img} alt={nombre} width={80} height={80} className="mb-2"/>
    </div>
    <div>
        <p className="font-semibold">{nombre}</p>
        <p>País: {pais}</p>
        <p>Género: {genero}</p>
    </div>
</div>
);
}
