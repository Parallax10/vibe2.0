"use client";
import NavBar from "../navBar";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function FormularioCancion() {
    const [portada, setPortada] = useState("");
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();
    const idArtista = searchParams.get('idArtista');

    const validarCancion = async () => {
        if (portada === "" || nombre === "" || genero === "") {
            alert("Por favor complete todos los campos de la canción");
            return;
        }

        const res = await fetch('/api/canciones', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: nombre, genero: genero, portada: portada, id_artista: idArtista })
        });

        if (res.ok) {
            alert("Canción agregada correctamente");
            router.push(`/PerfilArtista/${idArtista}`);
        }
    };

    return (
        <div className="flex justify-center mt-10 px-4">
            <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-md sm:w-180">
                <h1 className="text-3xl font-semibold text-center mb-6">Añadir nueva canción</h1>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Nombre de la canción</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-2 rounded border" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Género</label>
                        <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="w-full p-2 rounded border" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">URL de la Portada</label>
                        <input type="text" value={portada} onChange={(e) => setPortada(e.target.value)} className="w-full p-2 rounded border" />
                    </div>
                    <button onClick={validarCancion} className="mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Guardar canción
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function NuevaCancion() {
    return (
        <div>
            <NavBar />
            <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
                <FormularioCancion />
            </Suspense>
        </div>
    );
}