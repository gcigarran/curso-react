import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from 'react-bootstrap'
import { update, deleteProducto, getProductoById } from '../Services/productosService'
import { useParams } from "react-router-dom"
import ProductoFormulario from "../Components/ProductoFormulario"
import Loading from "../Components/Loading"

function ProductosModificar() {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        console.log("Form:", data)
        try {
            await update(id, data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        setLoading(true)
        await deleteProducto(id)
        setLoading(false)
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


    return (
        <Loading loading={loading}>
            <div>
                <h3>Modificar Producto</h3>
                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                <ProductoFormulario onSubmit={handleSubmit(onSubmit)} buttonLabel={"Modificar"} register={register} loading={loading} />
            </div>
        </Loading>
    )
}

export default ProductosModificar