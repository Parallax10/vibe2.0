"use client";
import NavBar from "../navBar";
import { useState } from "react";

export default function Home() {
const [nombre, setNombre] = useState("");
const [genero, setGenero] = useState("");
const [imagen, setImagen] = useState("");
const [imagenBanner, setImagenBanner] = useState("");

const [cancionPortada, setCancionPortada] = useState("");
const [cancionNombre, setCancionNombre] = useState("");
const [cancionGenero, setCancionGenero] = useState("");

function validarCancion() {
if (cancionPortada === "" || cancionNombre === "" || cancionGenero === "") {
    alert("Por favor complete todos los campos de la canción");
} else {
    alert("Canción agregada correctamente");
    setCancionGenero("");
    setCancionNombre("");
    setCancionPortada("");
}
}

function ValidarDatosArtista() {
if (nombre === "" || genero === "" || imagen === "" || imagenBanner === "") {
    alert("Por favor complete todos los campos del artista");
} else {
    alert("Artista agregado correctamente");
    setNombre("");
    setGenero("");
    setImagen("");
    setImagenBanner("");
}
}

return (
<div>
    <NavBar />
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 px-4 justify-center mt-10">
        <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-md sm:w-96">
            <h1 className="text-3xl font-semibold text-center mb-6">Añadir nuevo artista</h1>
            <div className="flex flex-col gap-4">
            <div>
                <label className="block font-semibold mb-1">Nombre</label>
                <input type="text"value={nombre}onChange={(e) => setNombre(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Género</label>
                <input type="text"value={genero}onChange={(e) => setGenero(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Imagen</label>
                <input type="text"value={imagen}onChange={(e) => setImagen(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Imagen banner</label>
                <input type="text"value={imagenBanner}onChange={(e) => setImagenBanner(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
                <button onClick={ValidarDatosArtista}className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">Guardar artista</button>
            </div>
        </div>
        <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-md sm:w-96 mt-6 sm:mt-0">
            <h1 className="text-3xl font-semibold text-center mb-6">Canciones</h1>
            <div className="flex flex-col gap-4">
            <div>
                <label className="block font-semibold mb-1">Portada</label>
                <input type="text"value={cancionPortada}onChange={(e) => setCancionPortada(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Nombre</label>
                <input type="text"value={cancionNombre}onChange={(e) => setCancionNombre(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <div>
                <label className="block font-semibold mb-1">Género</label>
                <input type="text"value={cancionGenero}onChange={(e) => setCancionGenero(e.target.value)}className="w-full p-2 rounded border"/>
            </div>
            <button onClick={validarCancion}className="mt-25.5 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Agregar canción</button>
            </div>
        </div>
    </div>
</div>
);
}
