"use client"
import { useState } from "react";

export default function Home() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const handleClick = () => {
        if (usuario=="" || contraseña=="") {
            setError("Los campos no pueden estar vacíos");
            return;
        }
        setError("");
    };
    return (
        <div>
            <img src="/imagenes/fondo.png" className="fixed top-0 left-0 w-full h-full object-cover -z-10"></img>
            <div>
                <img src="/imagenes/Logo.png" width={100}  alt="Logo Vibe" />
            </div>
            <br></br>
            
            <div className="flex flex-col items-center text-center">
                <h1 className="text-6xl">VIBE</h1>
                <br></br>
                <h1 className="text-3xl">Login</h1>
                    <div className="bg-white text-black py-15 px-4 m-20  w-1/3 rounded-2xl">
                        <p>usuario</p>
                        <input className="border-1 rounded-2xl w-full px-2" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                        <br/><br/>
                        <p>contraseña</p>
                        <input className="border-1 rounded-2xl w-full px-2" type="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}></input>
                        <br/><br/>
                        <p className="text-red-600">{error}</p>
                        <br></br>
                        <button  className="border-1 rounded-2xl w-full"onClick={handleClick}>Sign In</button>
                    </div>
            </div>
        </div>
    );
}
