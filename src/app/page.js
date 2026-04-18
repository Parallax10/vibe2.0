import Image from "next/image";
import GridArtistas from "./GridArtistas";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl p-7">VIBE</h1>

      <div className="text-xl md:text-3xl">
        <h2>TUS ARTISTAS FAVORITOS</h2>
        <h2>UN UNICO SITIO</h2>
      </div>

      <br />
      <br />

      <div>
        <Image src="/imagenes/Logo.png"alt="Imagen principal"width={280}height={280}className="w-40 md:w-64 lg:w-72 h-auto mx-auto"/>
      </div>

      <br />
      <br />

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        <a href="/Login" className="bg-botones text-white px-4 py-2 rounded">Login</a>
        <a href="/Registro" className="bg-botones text-white px-4 py-2 rounded">Registro</a>
      </div>

      <br />
      <br />

      <h2 className="text-2xl md:text-3xl">
ARTISTAS AGREGADOS RECIENTEMENTE</h2>

      <br />
      <br />
      <br />
      <br />

      <div className="w-full">
        <GridArtistas size="large" />
      </div>
    </div>
  );
}
