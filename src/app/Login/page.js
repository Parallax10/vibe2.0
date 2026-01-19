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
            <div>
                <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
            </div>
            <h1>VIBE</h1>
            <div>
                <p>usuario</p>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                <br/><br/>
                <p>contraseña</p>
                <input type="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}
                ></input>
                <br/><br/>
                <p>{error}</p>
                <button onClick={handleClick}>Sign In</button>
            </div>
        </div>
    );
}
