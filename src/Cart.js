import React, { useContext, useEffect, useState } from 'react'
import { Context } from "./Context";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useParams, useSearchParams } from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, emptyCart, removeFromCart } = useContext(Context)

    const navi = useNavigate()

    return (
        <div>
            <button onClick={() => emptyCart()}>emptyCart</button>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Product Items
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        cartItems.map((a) => (
                            <div key={a.id}>
                                <Dropdown.Item onClick={() => navi(`/xyz/${a.id}`)}>{a.title}</Dropdown.Item>
                            </div>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Container>
                <Row>
                    {
                        cartItems.map(product => (
                            <Col lg={4} md={4} sm={12}>
                                <Card>
                                    <Card.Body>
                                        <div key={product.id}>
                                            <h2>{product.title}</h2>
                                            <p>{product.description}</p>
                                            <p>Price: {product.price}</p>
                                            <button onClick={() => removeFromCart(product.id)}>Remove From Card</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <br></br>
        </div>
    )
}

export default Cart