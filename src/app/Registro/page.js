"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const router = useRouter();

    const handleClick = async () => {
        if (usuario === "" || contraseña === "" || correo === "") {
            setError("Los campos no pueden estar vacíos");
            return;
        }

        setError("");
        setCargando(true);

        try {
            const respuesta = await fetch('/api/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: usuario,
                    password: contraseña,
                    email: correo
                })
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                router.push('/Login');
            } else {
                setError(resultado.error || "Ocurrió un error al registrarse");
            }
        } catch (err) {
            setError("Error al conectar con el servidor");
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="min-h-screen relative">
            <img src="/imagenes/Logo.png" width={100} alt="Logo Vibe" className="absolute top-4 left-4" />
            <div className="min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-6xl font-bold mb-2">VIBE</h1>
                <h2 className="text-2xl mb-8">Registro</h2>
                <div className="bg-white text-black rounded-2xl shadow-md p-8 w-full max-w-md">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block font-semibold mb-1">Usuario</label>
                            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Contraseña</label>
                            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} className="w-full p-2 rounded border" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Correo</label>
                            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full p-2 rounded border" />
                        </div>

                        {error && <p className="text-red-600 text-sm text-center font-medium">{error}</p>}

                        <button
                            onClick={handleClick}
                            disabled={cargando}
                            className={`mt-4 text-white py-2 rounded transition w-full text-center ${cargando ? 'bg-gray-400 cursor-not-allowed' : 'bg-botones hover:bg-red-800'}`}
                        >
                            {cargando ? "Registrando..." : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}