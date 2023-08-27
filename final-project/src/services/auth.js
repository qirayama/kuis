import axios from "axios";
import { getAccessToken } from "../utils";

export const postRegister = async (user) => {
    try {
        const response = await axios.post('https://dev-example.sanbercloud.com/api/register', user);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const postLogin = async (user) => {
    try {
        const response = await axios.post('https://dev-example.sanbercloud.com/api/login', user);
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}

export const postChangePassword = async (passwords) => {
    try {
        const response = await axios.post('https://dev-example.sanbercloud.com/api/change-password', passwords, {
            headers: {"Authorization" : "Bearer "+ getAccessToken()}
        });
        return { success: true, data: response.data, message: '' }
    } catch (error) {
        return { success: false, data: [], message: error.message };
    }
}