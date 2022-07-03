import React from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import { Button, Form } from 'react-bootstrap'
import firebase from '../Config/firebase'

function LoginPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log("Form:", data)
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log(responseUser?.user?.uid)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" name="email" register={{ ...register("email") }} type="email" />

                <Input label="Password" name="password" register={{ ...register("password") }} type="password" />

                <Button type="submit" variant="primary">Registro</Button>
            </Form>
        </div>
    )
}

export default LoginPage