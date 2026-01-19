"use client"

import { useState } from "react";

export default function NavBar(){
    const[busqueda, setBusqueda]=useState("");
    return(
            <div>
                <div>
                    <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
                    <p>VIBE</p>
                </div>
                <div>
                    <button onClick={()=>alert("Esto llevaria a la pagina de filtro por pais")}>Pais</button>
                    <button onClick={()=>alert("Esto llevaria a la pagina de filtro por genero")}>Genero</button>
                </div>
                <div>
                    <p>Busqueda</p>
                    <input type="text" value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}></input>
                    <button onClick={()=>alert("Esto llevaria a la pagina de resultados de busqueda")}>Buscar</button>
                </div>
                <div>
                    <button onClick={()=>alert("Esto llevaria al perfil del usuario")}>Perfil</button>
                </div>
            </div>
    );
}