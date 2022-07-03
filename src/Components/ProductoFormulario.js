import React from "react";
import { Button, Form } from 'react-bootstrap';
import Input from './Input'

function ProductoFormulario(props){
    const {onSubmit, buttonLabel, register} = props

    return (
        <Form onSubmit={onSubmit}>
        <Input label="Título" name="title" register={{ ...register("title") }} />

        <Input label="Descripción" name="description" register={{ ...register("description") }} />

        <Input label="Precio" name="price" register={{ ...register("price") }} type="number" />

        <Button type="submit" variant="primary">{buttonLabel}</Button>
    </Form>
    )

}

export default ProductoFormulario