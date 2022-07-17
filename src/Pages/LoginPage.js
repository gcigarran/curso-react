import React, {useState, useContext} from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import { Form } from 'react-bootstrap'
import firebase from '../Config/firebase'
import ButtonWithLoading from "../Components/ButtonWithLoading"
import AlertCustom from "../Components/AlertCustom"
import { loginMessage } from "../Util/errorMessage"
import AuthContext from "../Context/AuthContext"

function LoginPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = useState({variant:'', text:''})

    const context = useContext(AuthContext)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log("Form:", data)
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log(responseUser?.user?.uid)
            setLoading(false)
            if (responseUser.user?.uid) {
                const dbResponse = await firebase.firestore
                .collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                const user = dbResponse.docs[0].data()
                console.log(user)
                context.loginUser(user)
                setAlert({variant:"success", text:"Bienvenido, "+user.name})
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setAlert({variant:"danger", text:(loginMessage[error.code] || "Ha ocurrido un error")})
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" name="email" register={{ ...register("email") }} type="email" />

                <Input label="Password" name="password" register={{ ...register("password") }} type="password" />

                <ButtonWithLoading loading={loading}>Login</ButtonWithLoading>

                <AlertCustom {...alert} />
            </Form>
        </div>
    )
}

export default LoginPage