import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "../Components/Loading";
import { getProductoById } from "../Services/productosService";

function DetallePage() {

    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [producto, setProducto] = useState({})

    const [mensaje, setMensaje] = useState('')

    useEffect(
        () => {
            try {
                const request = async () => {
                    const response = await getProductoById(id)
                    setLoading(false)
                    setProducto(response)
                }
                request()
            } catch (err) {
                console.error(err)
            }

        },
        [id]
    )

    const handleClick = () => {
        setMensaje('¡Gracias por su compra!')
    }


    return (<Loading loading={loading}>
        <div>
            <h1> {producto.title}</h1>
            <p> {producto.description} </p>
            <img src={producto.thumbnail} alt={producto.thumbnail_id}></img>
            <p>Precio: {producto.currency_id}  {producto.price}</p>
            <button onClick={handleClick}>Comprar</button>
            <div>{mensaje}</div>
        </div>
    </Loading>
    )

}

export default DetallePage;