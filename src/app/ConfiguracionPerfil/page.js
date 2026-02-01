"use client";
import NavBar from "../navBar";
import { useState } from "react";

export default function Home() {
const [nuevoNombre, setNuevoNombre] = useState("");
const [nuevoCorreo, setNuevoCorreo] = useState("");
const [nuevaContraseña, setNuevaContraseña] = useState("");
const [nuevaFotoPerfil, setNuevaFotoPerfil] = useState("");
const [nuevaFotoBanner, setNuevaFotoBanner] = useState("");
const [privacidad, setPrivacidad] = useState("publico");


function alternarPrivacidad() {
    if (privacidad=="publico"){
        setPrivacidad("privado")
    }else if(privacidad=="privado"){
        setPrivacidad("publico")
    }
}

return (
<div>
    <NavBar />
    <div className="flex justify-center mt-10 px-4">
        <div className="bg-fondoNavbar rounded shadow-md p-4 sm:p-8 w-full max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Configuracion del perfil</h1>
            <div className="flex flex-col gap-4">

            <div>
                <label className="block font-semibold mb-1">Cambiar nombre</label>
                <input type="text"value={nuevoNombre}onChange={(e) => setNuevoNombre(e.target.value)}className="w-full p-2 rounded border"/>
            </div>

            <div>
                <label className="block font-semibold mb-1">Cambiar correo</label>
                <input type="text"value={nuevoCorreo}onChange={(e) => setNuevoCorreo(e.target.value)}className="w-full p-2 rounded border"/>
            </div>

            <div>
                <label className="block font-semibold mb-1">Cambiar contraseña</label>
                <input type="password"value={nuevaContraseña}onChange={(e) => setNuevaContraseña(e.target.value)}className="w-full p-2 rounded border"/>
            </div>

            <div>
                <label className="block font-semibold mb-1">Cambiar foto de perfil</label>
                <input type="text"value={nuevaFotoPerfil}onChange={(e) => setNuevaFotoPerfil(e.target.value)}className="w-full p-2 rounded border"/>
            </div>

            <div>
                <label className="block font-semibold mb-1">Cambiar foto de banner</label>
                <input type="text"value={nuevaFotoBanner}onChange={(e) => setNuevaFotoBanner(e.target.value)}className="w-full p-2 rounded border"/>
            </div>

            <div className="mt-4">
                <label className="block font-semibold mb-1">Privacidad del perfil</label>
                <p className="mb-2">El perfil es actualmente: <span className="font-semibold">{privacidad}</span></p>
                <div className="flex gap-4 flex-wrap">
                <button onClick={() => alternarPrivacidad("publico")} className="bg-botones hover:bg-red-800 transition text-white py-2 px-2 rounded w-full sm:w-auto">Cambiar privacidad</button>
                
            </div>

            <a href="/Perfil" className="mt-6 inline-block w-full">
                <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition w-full text-center">Guardar cambios</button>
            </a>


            <div className="mt-6 border-t pt-4">
                <h2 className="text-red-600 font-semibold mb-2">Borrar cuenta (esto no se puede deshacer)</h2>
                <button onClick={() => alert("Esto borraría la cuenta y cerraría sesión")}className="bg-botones text-white py-2 w-full rounded hover:bg-red-700 transition">Borrar cuenta</button>
            </div>

            </div>
        </div>
    </div>
</div>

</div>
);
}
