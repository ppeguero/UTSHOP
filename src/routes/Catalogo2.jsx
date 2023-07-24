import React, { useState, useEffect } from "react"
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Catalogo2(){

    // Declarar constante
    const [product, setProducts] = useState([])

    useEffect(() => {
        // Definir una función asincrónica dentro del useEffect
        async function fetchProducts() {
          try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data); // Meter las data en SetProducts
          } catch (error) {
            console.error(error);
          }
        }

    // Llamar a la función asincrónica dentro del useEffect
    fetchProducts();
    }, []); 
    // El segundo parámetro del useEffect es un 
    // array de dependencias vacío para ejecutarlo 
    // solo una vez al montar el componente

    return(
        <div>
            
        <Header />

        {product.map((product) => (
        <div key={product.pkProduct}>
            {product.productName}
            {product.productPrice}
            {product.productDescription}
            <img src={product.productImage} alt={product.productName} />
        </div>
      ))}


        <Footer />

    </div>
    )
}