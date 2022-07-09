import React from "react";
import { Form } from 'react-bootstrap';
import ButtonWithLoading from "./ButtonWithLoading";
import Input from './Input'

function ProductoFormulario(props){
    const {onSubmit, buttonLabel, register, loading} = props

    return (
        <Form onSubmit={onSubmit}>
        <Input label="Título" name="title" register={{ ...register("title") }} />

        <Input label="Descripción" name="description" register={{ ...register("description") }} />

        <Input label="Precio" name="price" register={{ ...register("price") }} type="number" />

        <ButtonWithLoading loading={loading}>{buttonLabel}</ButtonWithLoading>
    </Form>
    )

}

export default ProductoFormulario