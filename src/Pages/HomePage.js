import React from "react"
import Productos from "../Components/Productos"
import firebase from '../Config/firebase'

function HomePage() {

    console.log(firebase)
    
    return (
        <div>
            <Productos />
        </div>
    )
}

export default HomePage