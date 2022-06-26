import React, { useState } from "react"

function Producto(props) {

    const producto = props.item

    const [mensaje, setMensaje] = useState("")

    const [cantidadDisponible, setCantidadDisponible] = useState(producto.cantidadDisponible)

    const handleClick = () => {
        if (cantidadDisponible > 0) {
            setCantidadDisponible(cantidadDisponible - 1)
            setMensaje("¡Gracias por su compra!")
        }
        else {
            alert("No hay stock disponible para realizar la compra")
            setMensaje("")
        }
    }

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: $ {producto.precio}</p>
            <p>SKU: {producto.sku}</p>
            <p>Cantidad disponible: {cantidadDisponible}</p>
            <button onClick={handleClick}>Comprar</button>
            <p>{mensaje}</p>
        </div>
    )
}

export default Producto