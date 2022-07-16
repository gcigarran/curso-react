import React, {useState} from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props){
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") || false)

    const loginUser = () => {
        setIsLogin(true)
        localStorage.setItem("isLogin",true)

    }

    const logoutUser = () => {
        setIsLogin(false)
        localStorage.removeItem("isLogin")
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                loginUser,
                logoutUser
            }}
        >
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthProvider