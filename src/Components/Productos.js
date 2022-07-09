import React, { useEffect, useState } from "react";
import { getProductosNamed } from "../Services/productosService";
import Producto from "./Producto";
import Row from "react-bootstrap/Row"
import Loading from "./Loading";

function Productos() {

    const [productos, setProductos] = useState([])

    const [productName, setProductName] = useState("ipod")

    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            const request = async () => {
                try {
                    const response = await getProductosNamed(productName)
                    console.log("response", response)
                    setProductos(response)
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                }
            }
            request()
        },
        [productName]
    )

    const handleChange = (event) => {
        setProductName(event.target.value)
    }

    return (
        <Loading loading={loading} config={{variant: "danger"}}>
            <div>
                <h3>Listado de Productos</h3>
                <p>Término buscado: <input value={productName} onChange={handleChange}></input></p>
                <Row>
                    {productos.map(producto =>
                        <Producto key={producto.id} data={producto} />
                    )}
                </Row>
            </div>
        </Loading>
    )

}

export default Productos