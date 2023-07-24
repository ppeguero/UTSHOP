import Header from "../components/Header"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import React, { useState, useReducer , useEffect, useContext } from 'react';
import CartContext from "../Context/Cart/CartContext";

const products = [
    {
        emoji: "\uD83C\uDFB8",
        name: 'gitar',
        price: 5
    },
    {
        emoji: "\uD83C\uDFB7",
        name: 'saxophone',
        price: 120,
    },
    {
        emoji: "\uD83E\uDD41",
        name: 'drums',
        price: 5
    },];

function getTotal(cart) {
    return cart.reduce((totalCost, item) => totalCost + item.price, 0);
}

function shoppingCartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1)
            return update
        default:
            return state;
    }
}

function getTotalSelectedAmountPerProduct(cart, productName) {
    return cart.filter(item => item.name === productName).length;
}

export default function Carrito() {
    
    const { addToCart, increase, decrease, cartItems, sumItems, itemCount, totalCost } =  useContext(CartContext);
  const cartItemsX = useContext(CartContext);

    const [cart, setCart] = useReducer(shoppingCartReducer, []);
    const [total, setTotal] = useState(0);

    function add(product) {
        const action = { product, type: 'add' };
        setCart(action);
        setTotal(current => current + product.price);
    }

    function remove(product) {
        const action = { product, type: 'remove' };
        setCart(action);
    }


    return (
        <div className="min-h-screen flex flex-col">

            <Header />

            <nav className="w-90 h-16 flex items-center flex-shrink-0 border border-gray-400 bg-white shadow-inner">
                <div className="w-1/2 flex justify-center">
                    <p className="text-black text-base font-inter font-light">PAGO SEGURO</p>
                </div>
                <div className="w-1/2 flex justify-center ">
                    <NavLink to="/catalogo" className="flex space-x-3">
                        <div>
                            <p className="text-black text-base font-inter font-light hover:text-gray-400">SEGUIR COMPRANDO </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPlay} style={{ color: "#9ca3af", }} />
                        </div>
                    </NavLink>
                </div>
            </nav>

            <div className="bg-zinc-200 h-auto flex items-center justify-center p-20">
                <div className="bg-white h-96 w-full sm:w-4/5 flex items-center justify-center drop-shadow-md">
                    <div className="flex items-center flex-col ">
                        <div className="mb-8">
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} className="fa-4x" />
                        </div>
                        <h1>
          Shopping Cart
          <span> ({itemCount})</span>
        </h1>
        <h2>
            Total: $ {totalCost}
        </h2>
                        <div>
                        {cartItems.length <= 0 &&
                            <h1 className="font-bold text-black text-2xl mb-6 text-center">TU CARRITO ESTÁ VACÍO</h1>
                                            }
                        </div>

                        <div>
                            {cartItems.map(product => (
                                <div key={product.productName}>
                                    <span role="img" aria-label={product.productName}>{product.productName}</span>

                                    <button onClick={() => increase(product)}>+</button><b>{product.quantity}</b>
                                    <button onClick={() => decrease(product)}>-</button>
                                </div>
                            ))}
                        </div>

                        <div>
                            <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"><NavLink to="/catalogo">COMPRAR AHORA</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white h-auto flex p-12">
                <div className="flex justify-start">
                    <h3 className="font-bold text-black text-xl">LO MÁS VENDIDO</h3>
                </div>
            </div>

            <Footer />
        </div>
    )
}