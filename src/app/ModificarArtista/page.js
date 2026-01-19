"use client"
import { useState } from "react";
import NavBar from "../navBar";

export  default function Home() {
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [imagen, setImagen] = useState("");
    const [imagenBanner, setImagenBanner] = useState("");
    function validarCampos(){
        if(nombre==""||genero==""|| imagen==""|| imagenBanner==""){
            alert("hay campos en blanco y estos no se actualizaran quiere continuar?")
        }
    }
return(
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <h1>Modificar artista</h1>
            <button onClick={()=>validarCampos()}>Guardar cambios</button>
        </div>
        <div>
            <h2>nombre</h2>
            <input type="text" value={nombre} onChange={(e=>(setNombre(e.target.value)))}></input>
            <h2>Genero</h2>
            <input type="text" value={genero} onChange={(e=>(setGenero(e.target.value)))}></input>
            <h2>imagen</h2>
            <input type="text" value={imagen} onChange={(e=>(setImagen(e.target.value)))}></input>
            <h2>imagen banner</h2>
            <input type="text" value={imagenBanner} onChange={(e=>(setImagenBanner(e.target.value)))}></input>
        </div>
    </div>
);
}