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
        <NavBar></NavBar>
        <button onClick={()=>cambiarPerfil()}>Admin/User</button>
        <button onClick={()=>accion()}>{texto}</button>
        <div>
            <h1 className="text-5xl">Filtro Genero</h1>
            <hr></hr>
            <br></br>
            <GridArtistas modo="genero" size="large"></GridArtistas>
        </div>
    </div>
);
}