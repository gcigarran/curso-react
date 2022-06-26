import React from "react";

function Producto(props) {
    const data = props.data

    return (<div>
        <p><b>{data.title}</b></p>      
        {/* <img src={data.thumbnail} alt={data.thumbnail_id}></img> */}
        <p>Precio: {data.currency_id} {data.price}</p>
        <p>Cantidad disponible: {data.available_quantity}</p> 
        <button>Ver Detalle</button>     
    </div>)

}

export default Producto