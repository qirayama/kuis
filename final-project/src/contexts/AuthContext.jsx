import { createContext, useState } from "react"
import { toast } from "react-toastify";
import { postRegister } from "../services/auth";
import { setAccessToken } from "../utils";

export const AuthContext = createContext({
    register: async () => { }
})

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    const register = async (registeredUser) => {
        const { success, data, message } = await postRegister(registeredUser);
        console.log(data)
        if (success) {
            setAccessToken(data.token);
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

    return (
        <AuthContext.Provider value={{
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}
