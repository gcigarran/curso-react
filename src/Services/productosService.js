import instance from "../Config/axios"

export function getProductoNamed(aString) {
    let queryUrl = "/sites/MLA/search?q=" + aString

    return instance.get(queryUrl)
        .then(response => response.data)
        .catch(err => console.error(err))
}