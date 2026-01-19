"use client"
import GridCanciones from "./GridCanciones";
import NavBar from "../navBar";
import { useState } from "react";
export  default function Home() {
    const [Admin,setAdmin]=useState(false)
    const [texto,setTexto]=useState("")
    function cambiarPerfil(){
        setAdmin(!Admin)
        if (Admin){
            setTexto("Añadir canciones")
        }else{
            setTexto("")
        }
    }
    function añadirCancion(){
        if (texto=="Añadir canciones"){
            /*Aqui aparecerian los campos para meter los datos en un alert de la cancion, pero no se como poner varios inputs en un alert*/
            alert("por implementar,revisa el comentario")
        }
    }
return(
    <div>
        <button onClick={()=>cambiarPerfil()}>Admin/User</button>
        <button onClick={()=>añadirCancion()}>{texto}</button>
        <NavBar></NavBar>
        <div>
            <h1>Perfil</h1>
            <br></br>
            <img src="/imagenes/Ado.png" width={200} height={200}/>
            <img src= "/imagenes/adoBanner.png" width={850} height={250}/>
            <button>Añadir a favoritos</button>
            <h1>
                Nombre:
                Ado
                <br></br>
                Genero:
                J-Rock
            </h1>
        </div>
        <div>
            <h1>Canciones</h1>
            <GridCanciones></GridCanciones>
        </div>
    </div>
);
}