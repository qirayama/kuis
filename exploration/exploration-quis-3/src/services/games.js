import axios from "axios";

export const getGames = async () => {
    try {
        const response = await axios.get('https://backendexample.sanbercloud.com/api/mobile-apps');
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const postGame = async (game) => {
    try {
        const response = await axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', game);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const putGame = async (game) => {
    try {
        const response = await axios.put('https://backendexample.sanbercloud.com/api/mobile-apps/' + game.id, game);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const deleteGame = async (id) => {
    try {
        const response = await axios.delete('https://backendexample.sanbercloud.com/api/mobile-apps/' + id);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

