"use client";
import { useState, useEffect, Suspense } from "react";
import NavBar from "../navBar";
import { useSearchParams, useRouter } from "next/navigation";

function FormularioArtista() {
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [imagen, setImagen] = useState("");
    const [imagenBanner, setImagenBanner] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();
    const idArtista = searchParams.get('id');

    useEffect(() => {
        if (idArtista) {
            fetch(`/api/artistas/${idArtista}`)
                .then(res => res.json())
                .then(data => {
                    setNombre(data.nombre || "");
                    setGenero(data.genero || "");
                    setImagen(data.img || "");
                    setImagenBanner(data.img_Banner || "");
                });
        }
    }, [idArtista]);

    const validarCampos = async () => {
        if (nombre === "" || genero === "" || imagen === "" || imagenBanner === "") {
            alert("Hay campos en blanco, por favor rellénalos.");
            return;
        }

        const res = await fetch(`/api/artistas/${idArtista}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, genero: genero, img: imagen, img_Banner: imagenBanner })
        });

        if (res.ok) {
            alert("Cambios guardados correctamente");
            router.push(`/PerfilArtista/${idArtista}`);
        }
    };

    return (
        <div className="flex justify-center mt-10 px-4">
            <div className="bg-fondoNavbar rounded shadow-md p-8 w-full max-w-5xl sm:w-180">
                <h1 className="text-3xl font-semibold text-center mb-6">Modificar artista</h1>
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
                        <input type="text" value={imagenBanner} onChange={(e) => setImagenBanner(e.target.value)} className="w-full p-2 rounded border " />
                    </div>
                    <button onClick={validarCampos} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">Guardar cambios</button>
                </div>
            </div>
        </div>
    );
}

export default function ModificarArtista() {
    return (
        <div>
            <NavBar />
            <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
                <FormularioArtista />
            </Suspense>
        </div>
    );
}