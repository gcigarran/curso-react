import React, { Component } from "react"

class Registro extends Component {
    render() {
       return (
           <div>
               <h3>Formulario de Registro</h3>
               <form onsubmit="return false;">

               <label for="name">Nombre</label>
               <input type="text" id="name" name="name" required></input><br/>

               <label for="lastName">Apellido</label>
               <input type="text" id="lastName" name="lastName" required></input><br/>
               
               <label for="email">Email</label>
               <input type="email" id="email" name="email" required></input><br/>
               
               <label for="phone">Telefono</label>
               <input type="number" id="phone" name="phone" required></input><br/>
               
               <label for="password">Password</label>
               <input type="password" id="password" name="password" required></input><br/>

               <label for="confirmPassword">Confirmar Password</label>
               <input type="password" id="confirmPassword" name="confirmPassword" required></input><br/>

               <input type="submit" id="submitButton" name="submitButton" value="Submit"></input>
               </form>
           </div>
       ) 
    }
}

export default Registro