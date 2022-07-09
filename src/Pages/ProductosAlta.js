import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { insert } from "../Services/productosService"
import ProductoFormulario from "../Components/ProductoFormulario"
import Loading from "../Components/Loading"

function ProductosAlta() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log("Form:", data)
        try {
            await insert(data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <Loading loading={loading}>
            <div>
                <h3>Alta Producto</h3>
                <ProductoFormulario onSubmit={handleSubmit(onSubmit)} buttonLabel={"Crear"} register={register} loading={loading} />
            </div>
        </Loading>
    )
}

export default ProductosAlta