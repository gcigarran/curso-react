import React from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'

function RegistroPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log("Form:", data)
        try {
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log(responseUser.user.uid)
            if (responseUser?.user?.uid) {
                const document = await firebase.firestore.collection("usuarios")
                .add({
                    name: data.name,
                    lastName: data.lastName,
                    userId: responseUser.user.uid
                })
                console.log(document)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>Formulario de Registro</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" name="name" register={{ ...register("name") }} />

                <Input label="Apellido" name="lastname" register={{ ...register("lastName") }} />

                <Input label="Email" name="email" register={{ ...register("email") }} type="email" />

                <Input label="Phone" name="phone" register={{ ...register("phone") }} type="number" />

                <Input label="Password" name="password" register={{ ...register("password") }} type="password" />

                <Button type="submit" variant="primary">Registro</Button>
            </Form>
        </div>
    )
}

export default RegistroPage