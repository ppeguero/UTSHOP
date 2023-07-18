import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IndexUser() {
    
    const [Users, setUsers] = useState([]);
    
    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        const response = await axios.get('http://localhost:3000/users'); // Ruta de la API para obtener usuarios
        setUsers(response.data);//Metiendo la respuesta(data) al estado 
        console.log(response.data);
    }





    return (
        <>
            <NavDash />
            <div className="container mx-20 w-50  p-20">
          
                <div className="row">
                   
                    <div className="offset-10 col-5 mb-5">

                        <a className="btn btn-success" href="/AddUser"> <i className="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div className="offset-2 col-11 mb-5">
                    <div className="card border">
                        <div className="card-header bg-dark">
                            <h1 className="text-white"><strong>Lista de usuarios</strong></h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="tblArticulo" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th> Nombre</th>
                                            <th> Apellido</th>
                                            <th>Contraseña</th>
                                            <th> Acciones</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                            {Users.map((users) => (
                                                <tr key={users.pkUser}>
                                                    <td>{users.userName} </td>
                                                    <td> {users.password}  </td>
                                                    <td>  {users.create} </td>


                                                    <td>
                                                        <a className=" btn btn-warning mr-auto" > Editar</a>
                                                        {" "}
                                                        <a className=" btn btn-danger mr-auto" > Eliminar</a>
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

export default IndexUser;