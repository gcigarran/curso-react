import React, { Component } from "react"

class Producto extends Component {
    render() {
        return (
            <div>
                <h5 id="productTitle">Producto</h5>
                <p id="productName">Nombre</p>
                <p id="productDescription">Descripcion</p>
                <p id="productPrice">Precio</p>
                <p id="productSKU">SKU</p>
                <p id="productQuantity">Cantidad disponible</p>
            </div>
        )
    }
}

export default Producto