"use client";
import CardArtistas from "./CardArtistas";

const artistas = [
{
nombre: "AC/DC",
pais: "Australia",
genero: "Rock",
img: "/imagenes/ACDC.png"
},
{
nombre: "Band-Maid",
pais: "Japón",
genero: "J-Rock",
img: "/imagenes/MAIDBAND.png"
},
{
nombre: "Linkin Park",
pais: "EE. UU.",
genero: "Nu-Metal",
img: "/imagenes/Linkin.png"
},
{
nombre: "Ado",
pais: "Japón",
genero: "J-Rock",
img: "/imagenes/ADO.png"
}
];
export default function GridArtistas({modo}) {
    const generos = [...new Set(artistas.map(a => a.genero))].sort();
    const pais = [...new Set(artistas.map(a => a.pais))].sort();
    if(modo=="genero"){
        return (
                <div>
                    {generos.map((genero, index) => (
                        <div key={index}>
                            <h2>{genero}</h2>
                            <div>
                                {artistas.filter(a => a.genero === genero).map((artista, i) => (
                                        <CardArtistas
                                            key={i}
                                            nombre={artista.nombre}
                                            pais={artista.pais}
                                            genero={artista.genero}
                                            img={artista.img}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
    }else if(modo=="pais"){
        return (
                <div>
                    {pais.map((pais, index) => (
                        <div key={index}>
                            <h2>{pais}</h2>
                            <div>
                                {artistas.filter(a => a.pais === pais).map((artista, i) => (
                                        <CardArtistas
                                            key={i}
                                            nombre={artista.nombre}
                                            pais={artista.pais}
                                            genero={artista.genero}
                                            img={artista.img}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
    }else
return (
<div>
    {artistas.map((artista, index) => (
    <CardArtistas
        key={index}
        nombre={artista.nombre}
        pais={artista.pais}
        genero={artista.genero}
        img={artista.img}
    />
    ))}
</div>
);
}

