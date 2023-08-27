import axios from "axios";

export const postRegister = async (user) => {
    try {
        const response = await axios.post('https://dev-example.sanbercloud.com/api/register', user);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}