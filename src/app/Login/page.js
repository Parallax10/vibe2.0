"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos esto para poder redirigir

export default function Home() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    
    const router = useRouter(); // Inicializamos el router

    const hacerLogin = async () => {
        // 1. Validamos que no estén vacíos
        if (usuario === "" || contraseña === "") {
            setError("Los campos no pueden estar vacíos");
            return;
        }
        // Limpiamos errores previos
        setError("");
        try {
        // 2. Enviamos los datos a TU API
        const respuesta = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // IMPORTANTE: Aquí emparejamos la palabra "username" que espera la API
            // con tu variable "usuario" de React, y "password" con "contraseña"
            body: JSON.stringify({ username: usuario, password: contraseña }) 
        });

        const resultado = await respuesta.json();

        // 3. Comprobamos el resultado
        if (respuesta.ok) {
            console.log("¡Logueado con éxito!", resultado.usuario);
            // Si todo va bien, mandamos al usuario a la página de Inicio
            router.push('/Inicio'); 
        } else {
            // Si Supabase dice que no coinciden, ponemos el error en tu variable de React
            // para que aparezca en rojo en el formulario
            setError(resultado.error);
        }
        } catch (err) {
        setError("Error al conectar con el servidor");
        }
    };

    return (
    <div className="min-h-screen relative px-4">
        <img src="/imagenes/Logo.png" width={80} alt="Logo Vibe" className="absolute top-4 left-4 sm:w-[100px]"/>
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2">VIBE</h1>
        <h2 className="text-2xl mb-8">Login</h2>
            <div className="bg-white text-black rounded-2xl shadow-md p-8 w-full max-w-xs sm:w-80">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Usuario</label>
                        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full p-2 rounded border"/>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Contraseña</label>
                        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} className="w-full p-2 rounded border"/>
                    </div>
                    {/* Aquí se mostrará "Nombre de usuario o contraseña incorrectos" si fallan */}
                    <p className="text-red-600 text-sm text-center font-medium">{error}</p>
                    
                    {/* Cambiamos el onClick para que llame a nuestra nueva función */}
                    <button onClick={hacerLogin} className="mt-4 bg-botones text-white py-2 rounded hover:bg-red-800 transition">
                      Sign In
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}