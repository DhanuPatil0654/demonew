import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Products() {
    
    const { allProducts, addToCart } = useContext(Context);
    console.log(allProducts)

    return (
        <>
            <Link to='/abc' >cart page</Link>
            <Container>
                <Row>
                    {
                        allProducts.map(product => (
                            <Col lg={3} md={2} sm={12}>
                                <Card>
                                    <Card.Body>
                                        <div key={product.id}>
                                        {/* <h2>{product.name}</h2> */}
                                            <h4>{product.title}</h4>
                                            <p>{product.description}</p>
                                            <p>Price: {product.price}</p>
                                            <button onClick={() => addToCart(product)}>add to cart</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
