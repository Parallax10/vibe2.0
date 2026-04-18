"use client"
import { Suspense } from "react";
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";

export default function Home() {
    return(
        <div>
            <Suspense fallback={<div className="text-center mt-10">Cargando filtros...</div>}>
                <NavBar pageType="filters" />
                <div>
                    <h1 className="text-5xl">Filtro Genero</h1>
                    <hr></hr>
                    <br></br>
                    <GridArtistas modo="genero" size="large"></GridArtistas>
                </div>
            </Suspense>
        </div>
    );
}