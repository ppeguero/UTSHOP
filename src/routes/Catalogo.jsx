import Header from "../components/header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import backpack from '/src/assets/backpack.png'
import StartRating from '../components/StartRating'
import React, { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import axios from 'axios';


// import TreeView from 'treeview-react-bootstrap';
import TreeView from 'react-treeview';



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

const [Products, setProducts] = useState([]);

// useEffect(() => {
//     // Lógica para obtener los usuarios de la base de datos al cargar el componente
//     // fetchProducts();
// });

const fetchProducts = async (category) => {

    if(!category){
        category="Mochila";
    } else {
        category = category.target.id;
    }

    const response = await axios.get('http://localhost:3000/products/category/'+category); 
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

                        <div className="px-16 ">
                            <button onClick={collapseAll}>Categorías</button>
                            {/* {dataSource.map((node, i) => {
                                // Let's make it so that the tree also toggles when we click the
                                // label. Controlled components make this effortless.
                                const label =
                                    <span className="node" onClick={handleClick.bind(null, i)}>
                                        Tela {i}
                                    </span>;
                                return (
                                    <TreeView
                                        key={i}
                                        nodeLabel={label}
                                        collapsed={collapsedBookkeeping[i]}
                                        onClick={handleClick.bind(null, i)}>
                                        {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
                                    </TreeView>
                                );
                            })} */}
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

                            <div className="card col" style={{ 'width': '18rem' }} key={p.pkProduct}>
                                
                                    <div>
                                        { p.productImage !== null &&
                                            <img src={`data:image/png;base64,${Buffer.from(p.productImage.data).toString('base64')}`} />
                                        }
                                    </div> 
                                    <div>
                                        {
                                            p.productImage === null &&
                                                <img src={backpack} style={{ 'width': '10rem', 'margin': 'auto' }} alt="..." />
                                        }
                                    </div>

                                <div className="card-body">
                                    <h5 className="card-text card-mochila-text">{p.productName}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-9">
                                            <StartRating /></div>
                                        <div className="col-3">
                                            <p className="card-text"><small className="text-body-secondary">${p.productPrice}</small></p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <a href="#" className="btn btn-dark btn-add-cart">Agregar al Carrito (0)</a>
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

