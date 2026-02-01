"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";
import { useState } from "react";
export  default function Home() {
    const [Admin,setAdmin]=useState(false)
    const [texto,setTexto]=useState("Sugerir artista")
    const [pagina,setPagina]=useState("")
    function cambiarPerfil(){
        setAdmin(!Admin)
        if (Admin){
            setTexto("Añadir artista")
        }else{
            setTexto("Sugerir artista")
        }
            
    }
    function accion(){
        if (texto=="Añadir artista"){
            setPagina("/NuevoArtista")
        }else{
            if (texto=="Sugerir artista"){
            
        }
        }
    }
return(
    <div>
        <NavBar></NavBar>
        <button onClick={()=>cambiarPerfil()}>Admin/User</button>
        <a href={pagina} className="mx-5">
            <button onClick={()=>accion()}>{texto}</button>
        </a>
        <div>
            <h1 className="text-5xl">Filtro por paises</h1>
            <hr></hr>
            <GridArtistas modo="pais" size="large"></GridArtistas>
        </div>
    </div>
);
}