/*Landing*/
import Image from "next/image";
import styles from "./page.module.css";
import GridArtistas from "./GridArtistas";

export default function Home() {
  return (
    <div>
      <h1>VIBE</h1>

      <h2>TUS ARTISTAS FAVORITOS</h2>
      <h2>UN UNICO SITIO</h2>

      <div>
        <button>Login</button>
        <button>Registro</button>
      </div>

      <div>
        <img src="/imagenes/Logo.png" alt="Imagen principal" width={95} height={80}/>
      </div>

      <h2>ARTISTAS AGREGADOS RECIENTEMENTE</h2>

      <GridArtistas></GridArtistas>
    </div>
  );
}
