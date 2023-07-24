import Header from "../components/header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import backpack from '/src/assets/backpack.png'
import StartRating from '../components/StartRating'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { Buffer } from "buffer";
import axios from 'axios';
import CartContext from "../Context/Cart/CartContext"


const dataSource = [
    ['Apple', 'Orange'],
    ['Facebook', 'Google'],
    ['Celery', 'Cheeseburger'],
];

const collapsedBookkeeping = 1;

function handleClick(i) {
    let [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
    collapsedBookkeeping[i] = !collapsedBookkeeping[i];
    this.setState({ collapsedBookkeeping: collapsedBookkeeping });
};

function collapseAll() {
    this.setState({
        collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
    });
};

export default function Catalogo() {
    const { addToCart, increase, cartItems, sumItems, itemCount } =  useContext(CartContext);

    const [Products, setProducts] = useState([]);

    // useEffect(() => {
    //     // Lógica para obtener los usuarios de la base de datos al cargar el componente
    //     // fetchProducts();
    // });

    const fetchProducts = async (category) => {

        if (!category) {
            category = "Mochila";
        } else {
            category = category.target.id;
        }

        const response = await axios.get('http://localhost:3000/products/category/' + category);
        // Ruta de la API para obtener usuarios
        setProducts(response.data); //Metiendo la respuesta(data) al estado
        console.log(category);
    };

    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <Search />

            <div className="container-cat">
                <div className="row">
                    <div className="cat-menu col-3">

                        <div className="px-30 text-light bg-dark text-center ">
                            <button onClick={collapseAll}>Categorías</button>
                        </div>
                        <br></br>
                        <p className="flex justify-center text-2xl">Colores</p>
                        <div className="flex row p-10 ">
                            <button type="button" className="btn btn-outline-primary">Azul</button>
                            <button type="button" className="btn btn-outline-secondary">Gris</button>
                            <button type="button" className="btn btn-outline-success">Verde</button>
                            <button type="button" className="btn btn-light">Blanco</button>
                            <button type="button" className="btn btn-outline-dark">Negro</button>
                        </div>
                    </div>
                    <div className="cat-body col-9">
                        <div className="row">
                            <ul className="nav justify-content-center nav-underline">
                                <li className="nav-item">
                                    <a id="Mochila" className="nav-link active" aria-current="page" onClick={fetchProducts}>Mochilas</a>
                                </li>
                                <li className="nav-item">
                                    <a id="Botella" className="nav-link" href="#" onClick={fetchProducts}>Botellas</a>
                                </li>
                                <li className="nav-item">
                                    <a id="Playera" className="nav-link" href="#" onClick={fetchProducts}>Playeras</a>
                                </li>
                            </ul>
                        </div>

                        <div className="row cat-cards">

                            {Products.map((p) => (

                                <div className="card col" key={p.pkProduct}>
                                    <div className="card-body">
                                            {p.productImage !== null &&
                                                <img src={`data:image/png;base64,${Buffer.from(p.productImage.data).toString('base64')}`} />
                                            }
                                            {
                                                p.productImage === null &&
                                                <img src={backpack} width={150} height={200} alt="..." />
                                            }
                                            <h5 className="card-text card-mochila-text">{p.productName}</h5>

                                            <div className="col-9">
                                                <StartRating /></div>
                                            <div className="col-3">
                                                <p className="card-text"><small className="text-body-secondary">${p.productPrice}</small></p>
                                            </div>


                                        <div className="row">
                                            <a href="#" className="btn btn-dark btn-add-cart"  onClick={() => addToCart(p)}>Agregar al Carrito</a>
                                        </div>
                                    </div>
                                </div>

                            ))}



                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

