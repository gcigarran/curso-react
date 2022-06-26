import React from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"

function RegistroPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log("Form:", data)
    }

    return (
        <div>
            <h3>Formulario de Registro</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" name="name" register={{ ...register("name") }} />

                <Input label="Apellido" name="lastname" register={{ ...register("lastName") }} />

                <Input label="Email" name="email" register={{ ...register("email") }} type="email" />

                <Input label="Phone" name="phone" register={{ ...register("phone") }} type="number" />

                <Input label="Password" name="password" register={{ ...register("password") }} type="password" />

                <input type="submit" id="submitButton" name="submitButton" value="Submit"></input>
            </form>
        </div>
    )
}

export default RegistroPage