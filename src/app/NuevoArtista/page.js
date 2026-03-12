"use client";
import NavBar from "../navBar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevoArtista() {
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [imagen, setImagen] = useState("");
    const [imagenBanner, setImagenBanner] = useState("");
    const router = useRouter();

    const ValidarDatosArtista = async () => {
        if (nombre === "" || genero === "" || imagen === "" || imagenBanner === "") {
            alert("Por favor complete todos los campos del artista");
            return;
        }

        const res = await fetch('/api/artistas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, genero: genero, img: imagen, img_Banner: imagenBanner })
        });

        if (res.ok) {
            alert("Artista agregado correctamente");
            router.push('/Inicio');
        } else {
            alert("Error al guardar el artista en la base de datos");
        }
    };

    return (
        <div>
            <NavBar />
            <div className="flex justify-center mt-10 px-4">
                <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-md sm:w-96">
                    <h1 className="text-3xl font-semibold text-center mb-6">Añadir nuevo artista</h1>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block font-semibold mb-1">Nombre</label>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Género</label>
                            <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Imagen (URL)</label>
                            <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Imagen banner (URL)</label>
                            <input type="text" value={imagenBanner} onChange={(e) => setImagenBanner(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <button onClick={ValidarDatosArtista} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">Guardar artista</button>
                    </div>
                </div>
            </div>
        </div>
    );
}