import { createContext, useState } from "react"
import { getGames, postGame, putGame } from "../services/games";

export const GameContext = createContext({
    games: [],
    isFetching: true,
    fetchGames: async () => { },
    setIsFetching: async () => { },
    addGame: async () => { },
    deleteGame: async () => { },
    editGame: async () => { }
})

export default function GameContextProvider({ children }) {
    const [games, setGames] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const fetchGames = async () => {
        const { success, data, message } = await getGames();
        if (success) {
            setGames(data);
            console.log(data)
        } else {
            console.log(message);
        }

        setIsFetching(false);
    }

    const addGame = async (game) => {
        setIsFetching(true);
        const { success, data, message } = await postGame(game);
        if (success) {
            setGames((prevGames) => [{ ...game, ...data }, ...prevGames]);
            console.log(data)
        } else {
            console.log(message);
        }
        setIsFetching(false);
    }

    const editGame = async (game) => {
        setIsFetching(true);
        const { success, data, message } = await putGame(game);
        if (success) {
            setGames( 
            });
            console.log(data)
        } else {
            console.log(message);
        }
        setIsFetching(false);
    }

    const deleteGame = async (id) => {
        setIsFetching(true);
        const { success, data, message } = await postGame(id);
        if (success) {
            setGames((prevGames) => prevGames.filter((game) => game.id !== id));
            console.log(data)
        } else {
            console.log(message);
        }

        setIsFetching(false);
    }

    return (
        <GameContext.Provider value={{
            games,
            isFetching,
            fetchGames,
            setIsFetching,
            addGame,
            deleteGame,
            editGame
        }}>
            {children}
        </GameContext.Provider>
    )
}
