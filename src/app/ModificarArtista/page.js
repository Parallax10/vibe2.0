"use client";
import { useState } from "react";
import NavBar from "../navBar";

export default function Home() {
const [nombre, setNombre] = useState("");
const [genero, setGenero] = useState("");
const [imagen, setImagen] = useState("");
const [imagenBanner, setImagenBanner] = useState("");

function validarCampos() {
if (nombre === "" || genero === "" || imagen === "" || imagenBanner === "") {
    alert("Hay campos en blanco, ¿quieres continuar?");
}
}

return (
<div>
    <NavBar />

    <div className="flex justify-center mt-10">
    <div className="bg-fondoNavbar rounded shadow-md p-8 w-180">

        <h1 className="text-3xl font-semibold text-center mb-6">
        Modificar artista
        </h1>

        {/* FORMULARIO */}
        <div className="flex flex-col gap-4">

        <div>
            <label className="block font-semibold mb-1">Nombre</label>
            <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 rounded border"
            />
        </div>

        <div>
            <label className="block font-semibold mb-1">Género</label>
            <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="w-full p-2 rounded border"
            />
        </div>

        <div>
            <label className="block font-semibold mb-1">Imagen</label>
            <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="w-full p-2 rounded border"
            />
        </div>

        <div>
            <label className="block font-semibold mb-1">Imagen banner</label>
            <input
            type="text"
            value={imagenBanner}
            onChange={(e) => setImagenBanner(e.target.value)}
            className="w-full p-2 rounded border"
            />
        </div>

        <button
            onClick={validarCampos}
            className="mt-4 bg-botones text-white py-2 rounded"
        >
            Guardar cambios
        </button>

        </div>
    </div>
    </div>
</div>
);
}
