import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from 'react-bootstrap'
import { update, deleteProducto, getProductoById } from '../Services/productosService'
import { useParams } from "react-router-dom"
import ProductoFormulario from "../Components/ProductoFormulario"

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
                    const producto = response
                    setLoading(false)
                    console.log(producto)
                    setValue("title", producto.title)
                    setValue("price", producto.price)
                    setValue("description", producto.description)
                }
                request()
            } catch (err) {
                console.error(err)
            }

        },
        [id, setValue]
    )

    if (loading) {
        return (
            <div>
                Cargando...
            </div>
        )
    }

    return (
        <div>
            <h3>Modificar Producto</h3>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            <ProductoFormulario onSubmit={handleSubmit(onSubmit)} buttonLabel={"Modificar"} register={register} />
        </div>
    )
}

export default ProductosModificar