"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";

export default function Home() {
    return (
        <div className="px-4">
            <NavBar pageType="home" />

            <div className="mt-6">
                <h1 className=" text-5xl sm:text-5xl">Top Artistas</h1>
                <hr></hr>
                <br></br>
                <div className="flex flex-col items-center text-center">
                    <GridArtistas size="large" />
                </div>
            </div>

            <div className="mt-10">
                <h1 className=" text-5xl sm:text-5xl">Artistas recientes</h1>
                <hr></hr>
                <br></br>
                <div className="flex flex-col items-center text-center">
                    <GridArtistas size="large" />
                </div>
            </div>
        </div>
    );
}