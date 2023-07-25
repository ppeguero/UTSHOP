import React, { useState, useEffect, useContext } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import NavDash from './NavDash'
import Modal from 'react-modal';
import ProductContext from '../Context/Product/ProductContext';

Modal.setAppElement('#root');

function IndexProduct() {
    const navigate = useNavigate();
    
    const { editProduct } = useContext(ProductContext);

    const [Products, setProducts] = useState([]);
    
    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        const response = await axios.get('http://localhost:3000/products'); // Ruta de la API para obtener usuarios
        setProducts(response.data);//Metiendo la respuesta(data) al estado 
        console.log(response.data);
    }


    return (
        <>
            <NavDash />
            <div className="container mx-20 w-50  p-20">
          
                <div className="row">
                   
                    <div className="offset-10 col-5 mb-5">

                        <a className="btn btn-success" href="/AddProduct"> <i className="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div className="offset-2 col-11 mb-5">
                    <div className="card border">
                        <div className="card-header bg-dark">
                            <h1 className="text-white"><strong>Lista de productos</strong></h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="tblArticulo" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th> Nombre</th>
                                            <th> Precio</th>
                                            <th>Categoria</th>
                                            <th> Stock</th>
                                            <th>Descripción</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                            {Products.map((products) => (
                                                <tr key={products.pkProduct}>
                                                    <td>{products.productName} </td>
                                                    <td> {products.productPrice}  </td>
                                                    <td> {products.productCategory}  </td>
                                                    <td> {products.productStock}  </td>
                                                    <td> {products.productDescription}  </td>
                                                    <td>  {products.create} </td>


                                                    <td>
                                                        <a className=" btn btn-warning mr-auto" onClick={() => {editProduct(products);  navigate('/EditProduct')}} > Editar</a>
                                                        <a className=" btn btn-danger mr-auto" href='/DeleteProduct' > Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default IndexProduct;