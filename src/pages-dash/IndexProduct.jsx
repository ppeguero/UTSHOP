import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IndexProduct() {
    
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
          
                <div class="row">
                   
                    <div class="offset-10 col-5 mb-5">

                        <a class="btn btn-success" href="/AddProduct"> <i class="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div class="offset-2 col-11 mb-5">
                    <div class="card border">
                        <div class="card-header bg-dark">
                            <h1 class="text-white"><strong>Lista de productos</strong></h1>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="tblArticulo" width="100%" cellspacing="0">
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
                                                        <a class=" btn btn-warning mr-auto" > Editar</a>
                                                        {" "}
                                                        <a class=" btn btn-danger mr-auto" href='/DeleteProduct' > Eliminar</a>
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