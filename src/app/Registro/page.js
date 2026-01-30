"use client"
import { useState } from "react";

export default function Home() {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const [correo,setCorreo]=useState("");
    const handleClick = () => {
        if (usuario=="" || contraseña==""||correo=="") {
            setError("Los campos no pueden estar vacíos");
            return;
        }
        setError("");
    };
    return (
        <div>
            
            <div>
                <img src="/imagenes/Logo.png" width={100}  alt="Logo Vibe" />
            </div>
            <br></br>
            
            <div className="flex flex-col items-center text-center">
                <h1 className="text-6xl">VIBE</h1>
                <br></br>
                <h1 className="text-3xl">Registro</h1>
                    <div className="bg-white text-black py-15 px-4 m-20 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-2xl">
                        <p>usuario</p>
                        <input className="border-1 rounded-2xl w-full px-2" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                        <br/><br/>
                        <p>contraseña</p>
                        <input className="border-1 rounded-2xl w-full px-2" type="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}></input>
                        <br/><br/>
                        <p>correo</p>
                        <input className="border-1 rounded-2xl w-full px-2" type="contraseña" value={correo} onChange={(e) => setCorreo(e.target.value)}></input>
                        <br/><br/>
                        <p className="text-red-600">{error}</p>
                        <br></br>
                        <button  className="border-1 rounded-2xl w-full"onClick={handleClick}>Sign In</button>
                    </div>
            </div>
        </div>
    );
}
