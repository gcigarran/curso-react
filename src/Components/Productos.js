import React, {useEffect, useState} from "react";
import { getProductoNamed } from "../Services/productosService";
import Producto from "./Producto";

function Productos() {

    const [productos, setProductos] = useState([])

    const productName = "ipod"

    useEffect(
        () => {
            getProductoNamed(productName)
            .then(response => setProductos(response.results))
        },
        []
    ) 

    return (
        <div>
            <h3>Listado de Productos</h3>
            <p>Término buscado: <b>{productName}</b></p>
            {productos.map(producto =>  
                <div key={producto.id}><Producto data={producto} /></div>
                )}
        </div>
    )
}

export default Productos