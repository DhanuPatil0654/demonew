import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Context = React.createContext()

function ContextProvider({ children }) {

    const { id } = useParams()

    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const [getid, setid] = useState(null)

    //Get ALL DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setCartItems(response.data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

//GET BY ID PRODUCTS
    

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setid(res.data.products))
            .catch((err) => console.log(err))
    })

    useEffect(() => {
        const fetchidData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setCartItems(response.data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchidData();
    }, []);


    function addToCart(newProd) {
        setCartItems(prevProd => [...prevProd, newProd])
    }
    function removeFromCart(id) {
        setCartItems(prevProd => prevProd.filter(product => product.id !== id))
    }
    function emptyCart() {
        setCartItems([])
    }
    function sortitem(title) {
        setCartItems(prevProd => prevProd.filter(product => product.title == title))
    }
    function databyid(id){
        setCartItems(prevProd => prevProd.filter(product => product.id == id))
    }


    return (
        <Context.Provider
            value={{

                setAllProducts,
                allProducts,
                cartItems,
                addToCart,
                removeFromCart,
                emptyCart,
                sortitem,
                // setid,
                 getid,
                databyid,


            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context }