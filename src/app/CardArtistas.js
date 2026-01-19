"use client";

export default function CardArtistas({ nombre, pais, genero, img }) {
return (
<div>
    <img src={img} alt={nombre} width={80} height={80} />
    <p>Nombre: {nombre}</p>
    <p>País:{pais}</p>
    <p>Género:{genero}</p>
</div>
);
}
