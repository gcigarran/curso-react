import React from "react";
import Producto from "./Producto";

function Productos() {

    const productos = [
        {
            nombre: "iPhone 13",
            descripcion: "El último de todos",
            precio: 1000000,
            sku: 12345678,
            cantidadDisponible: 5
        },
        {
            nombre: "iPhone 12",
            descripcion: "El anteúltimo de todos",
            precio: 999999,
            sku: 12345677,
            cantidadDisponible: 1
        },
    ]

    return (
        <div>
            {productos.map(p =>
                <div>
                    <Producto
                        item={p}
                    />
                </div>
            )}
        </div>
    )
}

export default Productos