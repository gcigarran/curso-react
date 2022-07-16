import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap"
import AuthContext from "../Context/AuthContext";

function Producto(props) {
    const data = props.data
    console.log("producto", props.data)
    return (
        <AuthContext.Consumer>
            {
                context =>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.thumbnail} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    Precio: {data.currency_id} {data.price} <br />
                                    Cantidad disponible: {data.available_quantity}
                                </Card.Text>
                                <Button variant="primary" as={Link} to={'/producto/' + data.id}>Ver Detalle</Button>
                                {
                                    context.isLogin &&
                                    <Button variant="secondary" as={Link} to={'/productos/modificar/' + data.id}>Modificar</Button>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
            }
        </AuthContext.Consumer>
    )

}

export default Producto