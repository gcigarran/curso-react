import instance from "../Config/axios"

function getUrl(anUrl) {
    return instance.get(anUrl)
        .then(response => response.data)
        .catch(err => console.error(err))
}

// Recuperar productos 

export async function getProductosNamed(aString) {
    let queryUrl = "/sites/MLA/search?q=" + aString

    const response = await getUrl(queryUrl)

    return response.results
}

export function getProductoById(anId) {
    let queryUrl = "/items/" + anId

    return getUrl(queryUrl)

}

// Demás funciones ABM - No soportadas

export function insert(body){
    notSupportedError("insert")
}

export function update(id,body) {
    notSupportedError("update")
}

export function deleteProducto(id) {
    notSupportedError("deleteProducto")
}

function notSupportedError(functionName) {
    console.error("Función no soportada: ", functionName)
}