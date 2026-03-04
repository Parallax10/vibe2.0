"use client"
import GridCanciones from "./GridCanciones";
import NavBar from "../navBar";
import { useState } from "react";

export default function Home() {
    const [admin, setAdmin] = useState(false);
    const [texto, setTexto] = useState("Sugerir artista");
    const [pagina, setPagina] = useState("");

    function cambiarPerfil() {
        setAdmin(!admin);
        if (admin) {
            setTexto("Añadir artista");
        } else {
            setTexto("Sugerir artista");
        }
    }

    function accion() {
        if (texto == "Añadir artista") {
            setPagina("/NuevoArtista");
        } else {
            if (texto == "Sugerir artista") {
                // Lógica pendiente
            }
        }
    }

    function añadirCancion() {
        alert("Por implementar");
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar></NavBar>
            <div className="flex flex-col sm:flex-row items-start px-4 sm:px-6 mt-4 gap-2 sm:gap-0">
                <button onClick={() => cambiarPerfil()}>Admin/User</button>
                <a href={pagina} className="mx-0 sm:mx-5 w-full sm:w-auto">
                    <button onClick={() => accion()} className="w-full sm:w-auto">{texto}</button>
                </a>
            </div>
            <div className="flex flex-col sm:flex-row">
                <aside className="w-full sm:w-72 bg-zinc-900 p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
                    <img src="/imagenes/ADO.png" alt="Artista" className="w-1/2 sm:w-full mx-auto rounded-md mb-6" />
                    <div className="space-y-3 text-sm">
                        <p className="font-bold">NOMBRE :</p>
                        <p className="text-gray-300">ADO</p>
                        <p className="font-bold">GÉNERO :</p>
                        <p className="text-gray-300">J-ROCK</p>
                        <button className="mt-4 w-full bg-botones py-2 rounded-md hover:bg-red-900 transition">Añadir a favoritos</button>
                    </div>
                </aside>
                <main className="flex-1 px-4 sm:px-6 py-4">
                    <div className="mb-6">
                        <img src="/imagenes/adoBanner.png" alt="Banner artista" className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">CANCIONES</h2>
                        {/* AQUI ESTA EL CAMBIO: Le pasamos el ID del artista (ej: 1) a nuestro Grid */}
                        <GridCanciones size="large" artistaId={1} />
                    </div>
                </main>
            </div>
        </div>
    );
}