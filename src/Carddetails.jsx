import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import { Context } from "./Context";
function Carddetails() {

    // const { getid } = useContext(Context);
    const {removeFromCart  }  = useContext(Context)
    const { id } = useParams()
     const [getid, setid] = useState(null)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setid(res.data))
            .catch((err) => console.log(err))
    })
    return (
        <>
            <h2>Selected Item Here</h2>
            <Card>
                <Card.Body>
                    {
                        getid && (
                            <>
                                <p>Title : {getid.title}</p>
                                <p>Product Price : {getid.price}</p>
                                <p>Product Description : {getid.description}</p>
                                <p>discountPercentage : {getid.discountPercentage}</p>
                                <button onClick={() => removeFromCart(getid.id)}>Remove From Card Items</button>
                            </>
                        )
                    }
                </Card.Body>
            </Card>

        </>
    )
}

export default Carddetails
