"use client"
// Ajustamos las rutas de importación porque ahora estamos una carpeta más adentro ([id])
import GridCanciones from "../GridCanciones"; 
import NavBar from "../../navBar"; 
import { useState, useEffect, use } from "react"; // <-- AÑADIMOS 'use' AQUÍ

export default function PerfilArtista({ params }) {
    // DESENVOLVEMOS LOS PARAMS CON use() ANTES DE LEER EL ID
    const resolvedParams = use(params);
    const idArtista = resolvedParams.id; 

    const [artista, setArtista] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [texto, setTexto] = useState("Sugerir artista");
    const [pagina, setPagina] = useState("");

    // Efecto para ir a buscar a tu API los datos de ESTE artista
    useEffect(() => {
        const cargarDatosArtista = async () => {
            try {
                const respuesta = await fetch(`/api/artistas/${idArtista}`);
                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setArtista(datos);
                }
            } catch (error) {
                console.error("Error al cargar el perfil:", error);
            } finally {
                setCargando(false);
            }
        };

        cargarDatosArtista();
    }, [idArtista]);

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

    // Mientras esperamos los datos de Supabase
    if (cargando) {
        return <div className="min-h-screen bg-black text-white flex justify-center items-center">Cargando perfil...</div>;
    }

    // Si ponemos un ID en la URL que no existe
    if (!artista) {
        return <div className="min-h-screen bg-black text-white flex justify-center items-center">Artista no encontrado</div>;
    }

    // Cuando ya tenemos los datos, pintamos el HTML
    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar></NavBar>
            <div className="flex flex-col sm:flex-row items-start px-4 sm:px-6 mt-4 gap-2 sm:gap-0">
                <button onClick={() => cambiarPerfil()}>Admin/User</button>
                <a href={pagina} className="mx-0 sm:mx-5 w-full sm:w-auto">
                    <button onClick={() => accion()} className="w-full sm:w-auto">{texto}</button>
                </a>
            </div>
            <div className="flex flex-col sm:flex-row mt-4">
                <aside className="w-full sm:w-72 bg-zinc-900 p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
                    {/* FOTO DINÁMICA DE SUPABASE */}
                    <img src={artista.img} alt={artista.nombre} className="w-1/2 sm:w-full mx-auto rounded-md mb-6" />
                    <div className="space-y-3 text-sm">
                        <p className="font-bold">NOMBRE :</p>
                        {/* NOMBRE DINÁMICO DE SUPABASE */}
                        <p className="text-gray-300 uppercase">{artista.nombre}</p>
                        <p className="font-bold">GÉNERO :</p>
                        {/* GÉNERO DINÁMICO DE SUPABASE */}
                        <p className="text-gray-300 uppercase">{artista.genero}</p>
                        <button className="mt-4 w-full bg-botones py-2 rounded-md hover:bg-red-900 transition">Añadir a favoritos</button>
                    </div>
                </aside>
                <main className="flex-1 px-4 sm:px-6 py-4">
                    <div className="mb-6">
                        <img src="/imagenes/adoBanner.png" alt="Banner artista" className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">CANCIONES</h2>
                        {/* LE PASAMOS EL ID DINÁMICO AL GRID DE CANCIONES */}
                        <GridCanciones size="large" artistaId={idArtista} artistaNombre={artista.nombre} />
                    </div>
                </main>
            </div>
        </div>
    );
}