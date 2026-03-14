"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";

export default function Home() {
    return(
        <div>
            <NavBar pageType="filters" />
            <div>
                <h1 className="text-5xl">Filtro Genero</h1>
                <hr></hr>
                <br></br>
                <GridArtistas modo="genero" size="large"></GridArtistas>
            </div>
        </div>
    );
}