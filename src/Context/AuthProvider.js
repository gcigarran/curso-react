import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function AuthProvider(props){
    const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") || false)
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo"))||{})
    const navigate = useNavigate()

    const loginUser = (user) => {
        setIsLogin(true)
        localStorage.setItem("isLogin",true)
        localStorage.setItem("userInfo", JSON.stringify(user))
        setUserInfo(user)
        setTimeout(() => navigate("/"), 1000 )
    }
    
    const logoutUser = () => {
        setIsLogin(false)
        localStorage.removeItem("isLogin")
        localStorage.removeItem("userInfo")
        setUserInfo({})
        navigate("/")
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthProvider