import React from "react";
import { Form } from 'react-bootstrap'

function Input(props) {
    const { label, name, type, placeholder, register } = props

    return (
        <div>
            <Form.Group className="mb-3" controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type || "text"} placeholder={placeholder || ""} name={name} {...register}/>
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            </div>
    )
}

export default Input