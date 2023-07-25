import Header from '../components/header';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import React, { useState, useReducer, useEffect, useContext } from 'react';
import CartContext from "../Context/Cart/CartContext";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function getTotalSelectedAmountPerProduct(cart, productName) {
    return cart.filter(item => item.name === productName).length;
}

export default function Carrito() {

    const { addToCart, increase, decrease, cartItems, sumItems, itemCount, totalCost, removeFromCart } = useContext(CartContext);

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

            {cartItems.length <= 0 &&
                        <div className='bg-zinc-200 h-fit flex items-center justify-center p-20'>
                            <div className='bg-white h-fit p-5 w-full sm:w-4/5 flex items-center justify-center drop-shadow-md'>
                                <div className='flex flex-col '>
                                    <div className="mb-8 flex justify-center">
                                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} className="fa-4x" />
                                    </div>
                                    <div>
                                    <div className='flex row justify-center'> 
                                 <h1 className="font-bold text-black text-2xl mb-6 text-center">TU CARRITO ESTÁ VACÍO</h1>
                                 <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"><NavLink to="/catalogo">COMPRAR AHORA</NavLink></button>    
                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }


            <div className='flex xl:flex-row flex-col xl:items-start items-center cart-items-container xl:space-y-0 xl:space-x-10 space-y-6'>
                <div className='col-7 xl:relative'>
                    <ol className="list-group ">
                        {cartItems.map(product => ( 
                            <li className="list-group-item d-flex justify-content-between align-items-start" key={product.productName}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{product.productName}</div>
                                    <div>
                                        $<strong>{product.productPrice.toFixed(2)}</strong>
                                    </div>
                                    {product.productDescription}
                                </div>
                                <div className='row item-option'>
                                    <div>
                                        <button className="badge bg-success" onClick={() => increase(product)}>+</button>
                                        <span className='product-quantity'>{product.quantity}</span>
                                        <button className='badge bg-success' onClick={() => decrease(product)}>-</button>
                                    </div>
                                    <div>
                                        <button className='btn btn-sm btn-outline-danger' onClick={() => removeFromCart(product)}>Eliminar</button>
                                    </div>

                                </div>
                            </li>
                        ))}

                        
                    </ol>
                </div>
                <div className="col-4 max-md:w-full">
                    {cartItems.length > 0 &&
                        <div className="bg-white h-96 w-full sm:w-4/5 flex items-center justify-center drop-shadow-md cart-paypal" style={{ height: '100%' }}>
                            <div className='cart-total'>
                                <h1>
                                    Carrito de compras
                                    <span> ({itemCount})</span>
                                </h1>
                                <h2>
                                    Total: ${totalCost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                </h2>
                            </div>
                            <div>
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




            <Footer />
        </div>
    )
}
