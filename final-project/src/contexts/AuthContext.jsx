import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { postChangePassword, postLogin, postRegister } from "../services/auth";
import { getAccessToken, getAuthUser, removeAccessToken, removeAuthUser, setAccessToken, setAuthUser } from "../utils";

export const AuthContext = createContext({
    register: async () => { },
    login: async () => { },
    logout: () => { },
    changePassword: async () => { },
    user: {},
    isFetching: null
})

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const token = getAccessToken();
    const authUser = getAuthUser();

    useEffect(() => {
        if(token && authUser && !user) {
            setUser(authUser);
        }
    }, [token, authUser, user]);

    const register = async (registeredUser) => {
        setIsFetching(true);
        const { success, data, message } = await postRegister(registeredUser);
        console.log(data)
        if (success) {
            setAccessToken(data.token);
            setAuthUser(data.user);
            setUser(data.user);
            toast.success('Register Success');
            setIsFetching(false);
            return true;
        } else {
            toast.error(message);
            setIsFetching(false);
            return false;
        }
    }

    const login = async (loggedinUser) => {
        setIsFetching(true);
        const { success, data, message } = await postLogin(loggedinUser);
        console.log(data)
        if (success) {
            setAccessToken(data.token);
            setAuthUser(data.user);
            setUser(data.user);
            toast.success('Login Success');
            setIsFetching(false);
            return true;
        } else {
            toast.error(message);
            setIsFetching(false);
            return false;
        }
    }

    const changePassword = async (passwords) => {
        setIsFetching(true);
        const { success, data, message } = await postChangePassword(passwords);
        console.log(data)
        if (success) {
            toast.success('Change password Success');
            setIsFetching(false);
            return true;
        } else {
            toast.error(message);
            setIsFetching(false);
            return false;
        }
    }

    const logout = () => {
        removeAccessToken(null);
        removeAuthUser(null);
        setUser(null);
        toast.success('Logged out');
    }

    return (
        <AuthContext.Provider value={{
            register,
            login,
            logout,
            changePassword,
            user,
            isFetching
        }}>
            {children}
        </AuthContext.Provider>
    )
}
