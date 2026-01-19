"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";
import GridCanciones from "../PerfilArtista/GridCanciones";
import { useState } from "react";
export  default function Home() {
return(
    <div>
        
        <NavBar></NavBar>
        <div>
            <h1>Perfil</h1>
            <button>Modificar Perfil</button>
            <br></br>
            <img src="/imagenes/pfp.png" width={200} height={200}/>
            <img src= "/imagenes/banner.png" width={850} height={250}/>
            <p>
                Nombre:
                Usuario
                <br></br>
                Genero Favorito:
                Rock
                <br></br>
                Artista Favorito:
                Ado
                <br></br>
                Cancion Favorita:
                Rockstar
            </p>
        </div>
        <div>
            <h1>Artistas Favoritos</h1>
            <GridArtistas></GridArtistas>
        </div>
        <div>
            <h1>Canciones Favoritas</h1>
            <GridCanciones></GridCanciones>
        </div>
    </div>
);
}