"use client";

export default function CardCancion({ titulo, genero, img }) {
return (
<div>
    <img src={img} alt={titulo} width={80} height={80} />
    <p><strong>Título:</strong> {titulo}</p>
    <p><strong>Género:</strong> {genero}</p>
</div>
);
}
