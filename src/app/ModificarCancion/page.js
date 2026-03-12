"use client";
import { useState, useEffect, Suspense } from "react";
import NavBar from "../navBar";
import { useSearchParams, useRouter } from "next/navigation";

function FormularioModificarCancion() {
    const [portada, setPortada] = useState("");
    const [nombre, setNombre] = useState("");
    const [idArtista, setIdArtista] = useState(null);

    const searchParams = useSearchParams();
    const router = useRouter();
    const idCancion = searchParams.get('id');

    useEffect(() => {
        if (idCancion) {
            fetch(`/api/canciones/${idCancion}`)
                .then(res => res.json())
                .then(data => {
                    setNombre(data.titulo || "");
                    setPortada(data.portada || "");
                    setIdArtista(data.id_artista);
                });
        }
    }, [idCancion]);

    const validarCampos = async () => {
        if (portada === "" || nombre === "" ) {
            alert("Hay campos en blanco, por favor rellénalos.");
            return;
        }

        const res = await fetch(`/api/canciones/${idCancion}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: nombre, portada: portada })
        });

        if (res.ok) {
            alert("Cambios guardados correctamente");
            router.push(`/PerfilArtista/${idArtista}`);
        }
    };

    return (
        <div className="flex justify-center mt-10 px-4">
            <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-5xl sm:w-180">
                <h1 className="text-3xl font-semibold text-center mb-6">Modificar canción</h1>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Nombre de la canción</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-2 rounded border " />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">URL de la Portada</label>
                        <input type="text" value={portada} onChange={(e) => setPortada(e.target.value)} className="w-full p-2 rounded border" />
                    </div>
                    <button onClick={validarCampos} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ModificarCancion() {
    return (
        <div>
            <NavBar />
            <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
                <FormularioModificarCancion />
            </Suspense>
        </div>
    );
}