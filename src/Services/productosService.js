// import instance from "../Config/axios"
import firebase from "../Config/firebase"

// export function getProductoNamed(aString) {
//     let queryUrl = "/sites/MLA/search?q=" + aString

//     return getUrl(queryUrl)
// }

// export function getProductoById(anId) {
//     let queryUrl = "/items/" + anId

//     return getUrl(queryUrl)

// }

// function getUrl(anUrl) {
//     return instance.get(anUrl)
//         .then(response => response.data)
//         .catch(err => console.error(err))
// }

export async function getProductoNamed(aString) {
    const querySnapshot = await firebase.firestore.collection("productos").get()

    return querySnapshot.docs
}

export async function getProductoById(anId) {
    const querySnapshot = await firebase.firestore.doc("productos/"+anId).get()

    return querySnapshot

}

export async function update(id, body) {
    const querySnapshot = await firebase.firestore.doc("productos/"+id).set(body)

    return querySnapshot
}

export async function deleteProducto(id) {
    const querySnapshot = await firebase.firestore.doc("productos/"+id).delete()

    return querySnapshot
 
}
