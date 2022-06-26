import React from "react";
import Input from "../Components/Input";

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <Input label="Usuario" name="username" />
            <Input label="Password" name="password" type="password" />
            <button>Iniciar sesión</button>
        </div>
    )
}

export default LoginPage