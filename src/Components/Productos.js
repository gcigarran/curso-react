import React, { useEffect, useState } from "react";
import { getProductoNamed } from "../Services/productosService";
import Producto from "./Producto";
import Row from "react-bootstrap/Row"

function Productos() {

    const [productos, setProductos] = useState([])

    const [productName, setProductName] = useState("ipod")

    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            setLoading(false)

            getProductoNamed(productName)
                .then(response => {
                    console.log("response")
                    setProductos(response)
                })

        },
        [productName]
    )

    const handleChange = (event) => {
        setProductName(event.target.value)
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } 

        return (
            <div>
                <h3>Listado de Productos</h3>
                <p>Término buscado: <input value={productName} onChange={handleChange}></input></p>
                <Row>
                    {productos.map(producto =>
                        <Producto data={{...producto.data(),...{id:producto.id}}} />
                    )} 
                </Row>
            </div>
        )
    
}

export default Productos