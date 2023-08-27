import { useContext, useEffect } from "react";
import { GameContext } from "./contexts/GameContext";

export default function Home() {
    const gameContext = useContext(GameContext);
    const { isFetching, fetchGames, games } = gameContext;

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className="p-8 flex flex-col space-y-1">
            <span className="text-gray-800 font-semibold text-lg">Daftar Game</span>
            <span className="text-gray-600 font-medium text-base">Koleksi game yang dapat anda nikmati di musim ini</span>

            <div className="flex justify-center mt-4">
                {isFetching ? (
                    <svg className="animate-spin h-10 w-10 text-blue-500 mt-8" viewBox="0 0 24 24"></svg> // This is a placeholder for a spinner, you might want to use a different SVG or spinner.
                ) : (
                    <div className="grid w-full grid-cols-4 gap-4">
                        {games.length ? games.map((game) => (
                            <div key={game.id} className="space-y-1 border p-4 rounded shadow">
                                <img className="h-72 w-full object-cover object-center" src={game.image_url} alt={game.name} />
                                <div>
                                    <h2 className="text-xl font-semibold">{game.name}</h2>
                                    <span>{game.release_year}</span>
                                    <span>{game.price}</span>
                                    <span>{game.category}</span>
                                    <div className="flex space-x-2">
                                        <span>{game.is_android_app}</span>
                                        <span>{game.is_ios_app}</span>
                                    </div>
                                </div>
                                <div className="pt-0">
                                    <span>{game.description}</span>
                                </div>
                            </div>
                        )) : <div className="col-span-4 text-center">Games is empty</div>}
                    </div>
                )}
            </div>
        </div>
    );
}
