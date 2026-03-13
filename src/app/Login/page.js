"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; 

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { setIsAdmin } = useAuth();

    const hacerLogin = async () => {
        if (usuario === "" || contraseña === "") {
            setError("Los campos no pueden estar vacíos");
            return;
        }
        setError("");
        try {
            const respuesta = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: usuario, password: contraseña })
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                localStorage.setItem('usuarioVibe', JSON.stringify(resultado.usuario));
                if (resultado.usuario.admin === true || resultado.usuario.admin === 1) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }

                router.push('/Inicio');
            } else {
                setError(resultado.error);
            }
        } catch (err) {
            setError("Error al conectar con el servidor");
        }
    };

    return (
        <div className="min-h-screen relative px-4">
            <img src="/imagenes/Logo.png" width={80} alt="Logo Vibe" className="absolute top-4 left-4 sm:w-[100px]" />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl font-bold mb-2">VIBE</h1>
                <h2 className="text-2xl mb-8">Login</h2>
                <div className="bg-white  rounded-2xl shadow-md p-8 w-full max-w-xs sm:w-80">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block font-semibold mb-1 text-black">Usuario</label>
                            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full p-2 rounded border text-black" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-black">Contraseña</label>
                            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} className="w-full p-2 rounded border text-black" />
                        </div>
                        <p className="text-red-600 text-sm text-center font-medium">{error}</p>
                        <button onClick={hacerLogin} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}