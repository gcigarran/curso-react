import React from "react";
import { Link } from "react-router-dom";

function Producto(props) {
    const data = props.data

    return (
        <div>
            <p><b>{data.title}</b></p>
            <p>Precio: {data.currency_id} {data.price}</p>
            <p>Cantidad disponible: {data.available_quantity}</p>
            <button><Link to={'/producto/' + data.id}>Ver Detalle</Link></button>
        </div>
    )

}

export default Producto