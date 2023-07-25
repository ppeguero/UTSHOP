import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import backpack from '/src/assets/backpack.png'
import StartRating from '../components/StartRating'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { Buffer } from "buffer";
import axios from 'axios';
import CartContext from "../Context/Cart/CartContext";
import Modal from 'react-modal';
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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Catalogo() {
    const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);

    const [Products, setProducts] = useState([]);
    const [ModalIsOpen, setModalIsOpen] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [activeTab, setActiveTab] =  useState([]);

    useEffect(() => {
        setModalIsOpen(false);
        fetchProducts();
    }, []);

    const fetchProducts = async (category) => {
        if (!category) {
            category = "Mochila";
        } else {
            category = category.target.id;
        }

        setActiveTab(category);

        const response = await axios.get('http://localhost:3000/products/category/' + category);
        setProducts(response.data);
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

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
                                    <a id="Mochila" className={activeTab === 'Mochila' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={fetchProducts}>Mochilas</a>
                                </li>
                                <li className="nav-item">
                                    <a id="Botella" className={activeTab === 'Botella' ? 'nav-link active' : 'nav-link'} onClick={fetchProducts}>Botellas</a>
                                </li>
                                <li className="nav-item">
                                    <a id="Playera" className={activeTab === 'Playera' ? 'nav-link active' : 'nav-link'} onClick={fetchProducts}>Playeras</a>
                                </li>
                            </ul>
                        </div>

                        <div className="row cat-cards">

                            {Products.map((p) => (

                                <div className="card col" key={p.pkProduct}>
                                    <div className="card-body ">
                                        {p.productImage !== null &&
                                            <img src={`data:image/png;base64,${Buffer.from(p.productImage.data).toString('base64')}`} onClick={() => openModal(p)} />
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
                                            <a href="#" className="btn btn-dark btn-add-cart" onClick={() => addToCart(p)}>Agregar al Carrito</a>
                                        </div>
                                    </div>
                                </div>

                            ))}



                        </div>
                    </div>

                    <div>
                        <Modal
                            isOpen={ModalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Detalles del producto"
                        >
                            <div className="">

                                <div className="modal-dialog">
                                    <div className="modal-content">

                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Detalle del Producto</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">

                                            <h2>{selectedProduct?.productName}</h2>
                                            <button onClick={closeModal}>close</button>
                                            <div>{selectedProduct?.productDescription}</div>
                                            {selectedProduct?.productImage?.data !== undefined &&
                                                <img src={`data:image/png;base64,${Buffer.from(selectedProduct?.productImage?.data).toString('base64')}`} />
                                            }
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" onClick={closeModal}>Close</button>
                                        </div>
                                    </div></div>
                            </div>
                        </Modal>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

