import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../config/constants";


export const AuthContext = createContext({
    // default parameters for better intellisense
    user: {},
    userLogin: function () { },
    userLogout: function () { },
    isAuthenticated: false
});

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage(LOCAL_STORAGE_KEY, {});

    const userLogin = (userData) => {
        setUser(userData);
        navigate('/home');
    };
    const userLogout = () => {
        setUser({});
        navigate('/');
    };
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            userLogin,
            userLogout,
            isAuthenticated: Boolean(Object.keys(user).length > 0),
        }}>
            {children}
        </AuthContext.Provider>
    );
}