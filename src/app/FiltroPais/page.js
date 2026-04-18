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
                    <h1 className="text-5xl">Filtro por paises</h1>
                    <hr></hr>
                    <GridArtistas modo="pais" size="large"></GridArtistas>
                </div>
            </Suspense>
        </div>
    );
}