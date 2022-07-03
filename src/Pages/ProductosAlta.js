import React from "react"
import { useForm } from "react-hook-form"
import { insert } from "../Services/productosService"
import ProductoFormulario from "../Components/ProductoFormulario"

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
            <ProductoFormulario onSubmit={handleSubmit(onSubmit)} buttonLabel={"Crear"} register={register} />
        </div>
    )
}

export default ProductosAlta