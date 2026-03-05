import { useState } from "react";

export default function NavBar(){
    const [busqueda, setBusqueda] = useState("");
    return(
        <div className="bg-fondoNavbar flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-6">
            <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                <a href="/Inicio" className="flex items-center">
                    {/* Esta imagen ya estaba bien */}
                    <img src="/imagenes/Logo.png" width={60} alt="Logo Vibe" className="sm:w-20 w-16"/>
                    <p className="py-2 sm:py-5 text-xl sm:text-2xl ml-2">VIBE</p>
                </a>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 py-2 sm:py-5">
                <a href="/FiltroPais">
                    <button className="px-3 sm:px-5 bg-botones rounded-2xl hover:bg-red-900 transition">Pais</button>
                </a>
                <a href="/FiltroGenero">
                    <button className="px-3 sm:px-5 bg-botones rounded-2xl hover:bg-red-900 transition">Genero</button>
                </a>
            </div>

            <div className="flex items-center w-full sm:w-auto my-2 sm:my-0">
                <input className="bg-white rounded-2xl text-black px-2 py-1 w-full sm:w-auto" type="text" value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}/>
                <button className="ml-2 sm:ml-5">
                    {/* CAMBIO AQUÍ: Añadida la / antes de imagenes */}
                    <img src="/imagenes/lupa.svg" width={25} alt="Buscar"/>
                </button>
            </div>

            <div className="py-2 sm:py-5">
                <a href="/Perfil">
                    <button>
                        {/* CAMBIO AQUÍ: Añadida la / antes de imagenes */}
                        <img src="/imagenes/user.svg" width={25} alt="Perfil"/>
                    </button>
                </a>
            </div>
        </div>
    );
}