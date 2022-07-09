import React, {useState} from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'
import ButtonWithLoading from "../Components/ButtonWithLoading"

function RegistroPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        console.log("Form:", data)
        try {
            setLoading(true)
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
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
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

                <ButtonWithLoading loading={loading}>Registro</ButtonWithLoading>
            </Form>
        </div>
    )
}

export default RegistroPage