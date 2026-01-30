"use client"

import { useState } from "react";

export default function NavBar(){
    const[busqueda, setBusqueda]=useState("");
    return(
            <div className="bg-fondoNavbar flex flex-row ">
                
                <div className="grid grid-cols-2">
                    <img src="/imagenes/Logo.png" width={80} alt="Logo Vibe" />
                    <p className="py-5">VIBE</p>
                </div>
                <div className="py-5 mx-3">
                    <button className="mx-5 px-5 bg-botones rounded-2xl" onClick={()=>alert("Esto llevaria a la pagina de filtro por pais")}>Pais</button>
                    <button className="mx-5 px-5 bg-botones rounded-2xl" onClick={()=>alert("Esto llevaria a la pagina de filtro por genero")}>Genero</button>
                </div>
                <div className="mx-auto grid grid-cols-3">
                    <input className="bg-white my-5 rounded-2xl text-black px-2" type="text" value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}></input>
                    <button className="mx-5" onClick={()=>alert("Esto llevaria a la pagina de resultados de busqueda")}><img src="imagenes/lupa.svg" width={25}></img></button>
                </div >
                <div className="mx-20 py-5">
                    <button onClick={()=>alert("Esto llevaria al perfil del usuario")}><img src="imagenes/user.svg" width={25}></img></button>
                </div>
            </div>
    );
}