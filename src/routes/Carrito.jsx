import Header from '../components/header';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import React, { useState, useReducer , useEffect, useContext } from 'react';
import CartContext from "../Context/Cart/CartContext";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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


    const amount = totalCost.toFixed(2);
    const currency = "MXN";
    const style = { "layout": "vertical" };

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

            <div className="bg-zinc-200 h-fit flex items-center justify-center p-20">
                <div className="bg-white h-fit p-5 w-full sm:w-4/5 flex items-center justify-center drop-shadow-md">
                    <div className="flex items-center flex-col ">
                        <div className="mb-8">
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} className="fa-4x" />
                        </div>


                        <div>
                            {cartItems.length <= 0 &&
                                <div className='flex row justify-center'> 
                                    <h1 className="font-bold text-black text-2xl mb-6 text-center">TU CARRITO ESTÁ VACÍO</h1>
                                    <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"><NavLink to="/catalogo">COMPRAR AHORA</NavLink></button>    
                                </div>
                            }
                        </div>
                        
                        <div>
                            {cartItems.length > 0 &&
                                <div>
                                    <h1 className='font-bold text-black text-2xl mb-6 text-center uppercase'>
                                        Carrito de compras

                                    </h1>
                                    <div className='space-y-4'>
                            {cartItems.map(product => (
                                <div className="flex row " key={product.productName}>
                                    <div className='flex justify-between'> 
                                        <span role="img" aria-label={product.productName}>{product.productName}</span>
                                        <b  >Cantidad: {product.quantity}</b>
                                    </div>
                                    <div className='flex items-center space-x-2 justify-center mt-2'> 
                                        <button className="text-xl w-10 bg-white text-green-400 border-2 border-solid hover:hover:-translate-y-1 hover:scale-110 duration-300 rounded-md" onClick={() => increase(product)}>+</button>
                                        <button className='text-xl w-10 bg-white text-red-400 border-2 border-solid hover:hover:-translate-y-1 hover:scale-110 duration-300 rounded-md' onClick={() => decrease(product)}>-</button>
                                    </div>
                                </div>
                            ))}
                            <div className=''>
                                <h2>
                                    Total a pagar: ${totalCost}
                                </h2>
                            </div>
                        </div>

                        <div className='mt-2'>
                            
            <PayPalScriptProvider options={{ "client-id": "AR6rQwFo6KJzoXVe07u-OJMoyVyVzIVNT7-y6iLd2DJNfe7wZAuqcbKhOtl5v4CD2eXCwbSnc-8w477z", currency: "MXN" }}>
                  <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                      return actions.order
                        .create({
                          purchase_units: [
                            {
                              amount: {
                                currency_code: currency,
                                value: amount,
                              },
                            },
                          ],
                        })
                        .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                        });
                    }}
                    onApprove={function (data, actions) {
                      return actions.order.capture().then(function () {
                        alert("Transacción completada por " + data.payer.name.given_name);
                        // Your code here after capturing the order
                      });
                    }}
                  />
                </PayPalScriptProvider>
                        </div>
                                </div>
                            }
                        </div>
                        
                    </div>
                </div>
            </div>


            {/* <div className="bg-white h-auto flex p-12">
                <div className="flex justify-start">
                    <h3 className="font-bold text-black text-xl">LO MÁS VENDIDO</h3>
                </div>
            </div> */}

            <Footer />
        </div>
    )
}