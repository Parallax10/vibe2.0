/*Landing*/
import Image from "next/image";
import GridArtistas from "./GridArtistas";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-6xl p-7">VIBE</h1>

    <div className="text-3xl">
      <h2>TUS ARTISTAS FAVORITOS</h2>
      <h2>UN UNICO SITIO</h2>
    </div>

    <br></br>
    <br></br>
    
    

      <div>
        <img src="/imagenes/Logo.png" alt="Imagen principal" width={280}/>
      </div>
    <br></br>
    <br></br>
    

      <div className="flex gap-100">
        <button className="bg-botones text-white px-4 py-2 rounded">Login</button>
        <button className="bg-botones text-white px-4 py-2 rounded">Registro</button>
      </div>
    <br></br>
    <br></br>
    
      <h2 className="text-3xl">ARTISTAS AGREGADOS RECIENTEMENTE</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <GridArtistas></GridArtistas>
    </div>
  );
}
