"use client"
import NavBar from "../navBar";
import GridArtistas from "../GridArtistas";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");

    return (
        <div className="px-4">
            <NavBar pageType="home" />

            <div className="mt-6">
                <h1 className="text-5xl sm:text-5xl">
                    {searchQuery ? `Búsqueda: "${searchQuery}"` : "Top Artistas"}
                </h1>
                <hr></hr>
                <br></br>
                <div className="flex flex-col items-center text-center">
                    <GridArtistas size="large" />
                </div>
            </div>

            {!searchQuery && (
                <div className="mt-10">
                    <h1 className="text-5xl sm:text-5xl">Artistas recientes</h1>
                    <hr></hr>
                    <br></br>
                    <div className="flex flex-col items-center text-center">
                        <GridArtistas size="large" modo="recientes" />
                    </div>
                </div>
            )}
        </div>
    );
}