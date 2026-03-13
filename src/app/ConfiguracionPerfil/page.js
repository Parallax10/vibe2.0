"use client";
import NavBar from "../navBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfiguracionPerfil() {
    const [usuario, setUsuario] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoCorreo, setNuevoCorreo] = useState("");
    const [nuevaContraseña, setNuevaContraseña] = useState("");
    const [nuevaFotoPerfil, setNuevaFotoPerfil] = useState("");
    const [nuevaFotoBanner, setNuevaFotoBanner] = useState("");
    const [privacidad, setPrivacidad] = useState("publico");

    const router = useRouter();

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioVibe');
        if (!usuarioGuardado) {
            router.push('/Login');
            return;
        }

        const usuarioObj = JSON.parse(usuarioGuardado);
        setUsuario(usuarioObj);
        setNuevoNombre(usuarioObj.Nombre || "");
        setNuevoCorreo(usuarioObj.Correo || "");
        setNuevaContraseña(usuarioObj.Contraseña || ""); 
        setNuevaFotoPerfil(usuarioObj.FtoPerfil || "");
        setNuevaFotoBanner(usuarioObj.FtoBanner || "");
        setPrivacidad(usuarioObj.Privacidad || "publico");
    }, [router]);

    function alternarPrivacidad() {
        setPrivacidad(prev => prev === "publico" ? "privado" : "publico");
    }

const guardarCambios = async () => {
        if (!usuario) return;
        const bodyData = {
            Nombre: nuevoNombre,
            Correo: nuevoCorreo,
            Contraseña: nuevaContraseña,
            FtoPerfil: nuevaFotoPerfil,
            FtoBanner: nuevaFotoBanner
        };

        const res = await fetch(`/api/perfil?id=${usuario.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('usuarioVibe', JSON.stringify(data));
            alert("Perfil actualizado correctamente");
            router.push('/Perfil');
        } else {
            const errData = await res.json();
            alert("Error al actualizar el perfil: " + (errData.error || "Desconocido"));
        }
    };

    const borrarCuenta = async () => {
        const confirmacion = window.confirm("¿Estás seguro de que quieres borrar tu cuenta? Esto no se puede deshacer.");
        if (confirmacion && usuario) {
            localStorage.removeItem('usuarioVibe');
            alert("Cuenta borrada.");
            router.push('/Login');
        }
    };

    if (!usuario) return <div className="min-h-screen bg-black text-white flex justify-center items-center">Cargando...</div>;

    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar />
            <div className="flex justify-center mt-10 px-4 pb-10">
                <div className="bg-zinc-900 rounded shadow-md p-4 sm:p-8 w-full max-w-2xl border border-zinc-800">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Configuración del perfil</h1>
                    <div className="flex flex-col gap-4">

                        <div>
                            <label className="block font-semibold mb-1 text-white">Cambiar nombre</label>
                            <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} className="w-full p-2 rounded border bg-zinc-800 border-zinc-600 text-white outline-none focus:border-gray-400" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Cambiar correo</label>
                            <input type="email" value={nuevoCorreo} onChange={(e) => setNuevoCorreo(e.target.value)} className="w-full p-2 rounded border bg-zinc-800 border-zinc-600 text-white outline-none focus:border-gray-400" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Cambiar contraseña</label>
                            <input type="text" value={nuevaContraseña} onChange={(e) => setNuevaContraseña(e.target.value)} className="w-full p-2 rounded border bg-zinc-800 border-zinc-600 text-white outline-none focus:border-gray-400" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Cambiar foto de perfil (URL)</label>
                            <input type="text" value={nuevaFotoPerfil} onChange={(e) => setNuevaFotoPerfil(e.target.value)} className="w-full p-2 rounded border bg-zinc-800 border-zinc-600 text-white outline-none focus:border-gray-400" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Cambiar foto de banner (URL)</label>
                            <input type="text" value={nuevaFotoBanner} onChange={(e) => setNuevaFotoBanner(e.target.value)} className="w-full p-2 rounded border bg-zinc-800 border-zinc-600 text-white outline-none focus:border-gray-400" />
                        </div>

                        <div className="mt-4 bg-zinc-800 p-4 rounded border border-zinc-600">
                            <label className="block font-semibold mb-1 text-white">Privacidad del perfil</label>
                            <p className="mb-4 text-sm text-gray-300">El perfil es actualmente: <span className="font-semibold uppercase text-white">{privacidad}</span></p>
                            <button onClick={alternarPrivacidad} className="bg-zinc-700 hover:bg-zinc-600 transition text-white py-2 px-4 rounded w-full sm:w-auto font-medium">
                                Cambiar privacidad
                            </button>
                        </div>

                        <div className="mt-6">
                            <button onClick={guardarCambios} className="bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition w-full text-center">
                                Guardar cambios
                            </button>
                        </div>

                        <div className="mt-6 border-t border-zinc-700 pt-6">
                            <h2 className="text-red-500 font-semibold mb-2">Zona de peligro</h2>
                            <p className="text-sm text-gray-400 mb-4">Borrar tu cuenta eliminará todos tus datos, artistas y canciones favoritas permanentemente.</p>
                            <button onClick={borrarCuenta} className="bg-red-900/50 border border-red-800 text-red-200 py-2 w-full rounded hover:bg-red-800 hover:text-white transition font-bold">
                                Borrar cuenta
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}