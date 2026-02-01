"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";
import GridCanciones from "../PerfilArtista/GridCanciones";

export default function Home() {
return (
<div className="min-h-screen bg-black text-white">
    <NavBar />
    <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold ">PERFIL</h1>
        <a href="/ConfiguracionPerfil">
            <button className="bg-botones hover:bg-red-700 px-4 py-2 rounded-md text-sm">Modificar Perfil</button>
        </a>
    </div>
    <div className="flex flex-col sm:flex-row">
        <aside className="w-full sm:w-72 bg-fondoNavbar p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
            <img src="/imagenes/pfp.png"alt="Foto perfil"className="w-1/2 sm:w-full mx-auto rounded-md mb-6"/>
            <div className="text-sm space-y-3">
                <p className="font-bold">NOMBRE :</p>
                <p className="text-gray-300">Usuario</p>
                <p className="font-bold">GENERO FAVORITO :</p>
                <p className="text-gray-300">ROCK</p>
                <p className="font-bold">ARTISTA FAVORITO :</p>
                <p className="text-gray-300">ADO</p>
                <p className="font-bold">CANCIÓN FAVORITA :</p>
                <p className="text-gray-300">ROCKSTAR</p>
            </div>
        </aside>
        <main className="flex-1 px-4 sm:px-6 py-4">
            <div className="mb-6">
                <img src="/imagenes/banner.png"alt="Banner"className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"/>
            </div>
            <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">ARTISTAS FAVORITOS</h2>
                <GridArtistas size="large" />
            </div>
            <div>
                <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-600 pb-2 mb-4">CANCIONES FAVORITAS</h2>
                <GridCanciones size="large"/>
            </div>
        </main>
    </div>
</div>
);
}
