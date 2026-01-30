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
            /*este boton llevaria a NuevoArtista*/
            alert("por implementar,revisa el comentario")
        }else{
            if (texto=="Sugerir artista"){
            /*Aqui aparecerian los campos para meter los datos en un alert del artista, pero no se como poner varios inputs en un alert*/
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
            <h1>Filtro por paises</h1>
            <GridArtistas modo="pais" size="large"></GridArtistas>
        </div>
    </div>
);
}