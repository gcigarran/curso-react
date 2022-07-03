import firebase from "../Config/firebase"

const collectionName = "productos"
const collectionUrl = collectionName + "/"

function collection() {
    return firebase.firestore.collection(collectionName)
}

function singleProductWithId(id) {
    return firebase.firestore.doc(collectionUrl + id)
}

async function getDocs() {
    const querySnapshot = await collection().get()

    return querySnapshot.docs
}

// Recuperar productos 

async function getProductos() {
    const productos = await getDocs()

    return productos.map(producto => {
        return { ...producto.data(), ...{ id: producto.id } }
    })
}

export async function getProductosNamed(aString) {

    const productos = await getProductos()

    return productos.filter(producto => producto.title.toLowerCase().includes(aString.toLowerCase()))

}

export async function getProductoById(id) {
    const querySnapshot = await singleProductWithId(id).get()

    return querySnapshot.data()

}

// Demás funciones ABM

export async function insert(body) {
    const document = await collection()
        .add({
            title: body.title,
            description: body.description,
            price: body.price
        })
    console.log(document)
}

export async function update(id, body) {
    const querySnapshot = await singleProductWithId(id).set(body)

    return querySnapshot
}

export async function deleteProducto(id) {
    const querySnapshot = await singleProductWithId(id).delete()

    return querySnapshot

}


