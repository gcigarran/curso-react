import instance from "../Config/axios"

export function getProductoNamed(aString) {
    let queryUrl = "/sites/MLA/search?q=" + aString

    return getUrl(queryUrl)
}

export function getProductoById(anId) {
    let queryUrl = "/items/" + anId

    return getUrl(queryUrl)

}

function getUrl(anUrl) {
    return instance.get(anUrl)
        .then(response => response.data)
        .catch(err => console.error(err))
}