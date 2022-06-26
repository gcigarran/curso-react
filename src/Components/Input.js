import React from "react";

function Input (props) {
    const {label, name, type, placeholder, register} = props
    
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type || "text"} placeholder={placeholder || ""} {...register}></input>
        </div>
    )
}

export default Input