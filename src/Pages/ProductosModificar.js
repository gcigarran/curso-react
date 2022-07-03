import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../Components/Input"
import { Button, Form } from 'react-bootstrap'
import firebase from '../Config/firebase'
import { getProductoById, update, deleteProducto } from '../Services/productosService'
import { useParams } from "react-router-dom"

function ProductosModificar() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log("Form:", data)
        try {
            await update(id, data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        await deleteProducto(id)
    }

    useEffect(
        () => {
            try {
                const request = async () => {
                    const response = await getProductoById(id)
                    setLoading(false)
                    console.log(response.data())
                    setValue("title", response.data().title)
                    setValue("price", response.data().price)
                    setValue("description", response.data().description)
                }
                request()
            } catch (err) {
                console.error(err)
            }

        },
        [id, setValue]
    )
    
    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h3>Modificar Producto</h3>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Título" name="title" register={{ ...register("title") }} />

                <Input label="Descripción" name="description" register={{ ...register("description") }} />

                <Input label="Precio" name="price" register={{ ...register("price") }} type="number" />

                <Button type="submit" variant="primary">Modificar</Button>
            </Form>
        </div>
    )
}

export default ProductosModificar