import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";

function Menu() {

    return (

        <div>
            <AuthContext.Consumer>
                {context =>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/">Web</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                    {!context.isLogin &&
                                        <>
                                            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        </>
                                    }
                                    {context.isLogin &&
                                        <>
                                            <Nav.Link onClick={context.logoutUser}>Logout</Nav.Link>
                                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                                                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                            </NavDropdown>
                                        </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                            {
                                context.isLogin &&
                                <>
                                    Hola, {context?.userInfo?.name}
                                </>
                            }
                        </Container>
                    </Navbar>
                }
            </AuthContext.Consumer>

        </div>
    )
}

export default Menu