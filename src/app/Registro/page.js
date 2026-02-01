"use client";
import { useState } from "react";

export default function Home() {
const [usuario, setUsuario] = useState("");
const [contraseña, setContraseña] = useState("");
const [correo, setCorreo] = useState("");
const [error, setError] = useState("");

const handleClick = () => {
if (usuario === "" || contraseña === "" || correo === "") {
    setError("Los campos no pueden estar vacíos");
    return;
}
setError("");
};

return (
<div className="min-h-screen relative">
    <img src="/imagenes/Logo.png" width={100} alt="Logo Vibe" className="absolute top-4 left-4"/>
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold mb-2">VIBE</h1>
        <h2 className="text-2xl mb-8">Registro</h2>
            <div className="bg-white text-black rounded-2xl shadow-md p-8 w-full max-w-md">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Usuario</label>
                        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full p-2 rounded border"/>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Contraseña</label>
                        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} className="w-full p-2 rounded border"/>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Correo</label>
                        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full p-2 rounded border"/>
                    </div>
                        <p className="text-red-600 text-sm text-center">{error}</p>
                        <button onClick={handleClick} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition w-full text-center">Sign Up</button>
                </div>
            </div>
    </div>
</div>
);
}
