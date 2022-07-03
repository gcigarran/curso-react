import React from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import { Button, Form } from 'react-bootstrap'
import { insert } from "../Services/productosService"

function ProductosAlta() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log("Form:", data)
        try {
            await insert(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>Alta Producto</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Título" name="title" register={{ ...register("title") }} />

                <Input label="Descripción" name="description" register={{ ...register("description") }} />

                <Input label="Precio" name="price" register={{ ...register("price") }} type="number" />

                <Button type="submit" variant="primary">Crear</Button>
            </Form>
        </div>
    )
}

export default ProductosAlta