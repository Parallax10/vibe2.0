"use client"
import NavBar from "../navBar";

export  default function Home() {
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [imagen, setImagen] = useState("");
    const [imagenBanner, setImagenBanner] = useState("");
    const [cancionPortada, setCancionPortada] = useState("");
    const [cancionNombre, setCancionNombre] = useState("");
    const [cancionGenero, setCancionGenero] = useState("");

    function validarCancion(){
        if(cancionPortada=="" || cancionNombre=="" || cancionGenero==""){
            alert("Por favor complete todos los campos de la cancion");
        } else {
            alert("Cancion agregada correctamente");
            setCancionGenero("");
            setCancionNombre("");
            setCancionPortada("");
        }
    }
    function ValidarDatosArtista(){
        if(nombre=="" || genero=="" || imagen=="" || imagenBanner==""){
            alert("Por favor complete todos los campos del artista");
        } else {    
            alert("Artista agregado correctamente");
            setNombre("");
            setGenero("");
            setImagen("");
            setImagenBanner("");
        }
    }   

return(
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <h1>Añadir nuevo artista</h1>
            <button onClick={()=>ValidarDatosArtista()}>Guardar artista</button>
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
            <hr></hr>
            <h1>Canciones</h1>
            <hr></hr>
            <h2>Portada</h2>
            <input type="text" value={cancionPortada} onChange={(e=>(setCancionPortada(e.target.value)))}></input>
            <h2>nombre</h2>
            <input type="text" value={cancionNombre} onChange={(e=>(setCancionNombre(e.target.value)))}></input>
            <h2>Genero</h2>
            <input type="text" value={cancionGenero} onChange={(e=>(setCancionGenero(e.target.value)))}></input>
            <button onClick={()=>validarCancion()}>agregar cancion</button>
        </div>
    </div>
);
}