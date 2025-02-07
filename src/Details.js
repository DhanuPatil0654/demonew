// import React from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from "./Context";
function Carddetails() {
    const { getid } = useContext(Context)
    
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
                            </>
                        )
                    }
                </Card.Body>
            </Card>

        </>
    )
}

export default Carddetails
