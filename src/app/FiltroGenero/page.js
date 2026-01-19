"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";
import { useState } from "react";
export  default function Home() {
    const [Admin,setAdmin]=useState(false)
    const [texto,setTexto]=useState("Sugerir artista")
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
            alert("por implementar,revisa el comentario")
        }else{
            if (texto=="Sugerir artista"){
            alert("por implementar,revisa el comentario")
        }
        }
    }
return(
    <div>
        <button onClick={()=>cambiarPerfil()}>Admin/User</button>
        <button onClick={()=>accion()}>{texto}</button>
        <NavBar></NavBar>
        <div>
            <h1>Filtro Genero</h1>
            <GridArtistas modo="genero"></GridArtistas>
        </div>
    </div>
);
}