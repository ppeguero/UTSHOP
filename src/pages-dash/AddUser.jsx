import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function AddUser() {
  return (
    <>
      <NavDash />

      <Formik
        initialValues={{
          userName: "",
          password: ""

        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values)
            await axios.post('http://localhost:3000/users', values)
            actions.resetForm()
             alert('Datos agregados correctamente')
          
             
        }}
        >
        {({handleChange, handleSubmit, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Agregar nuevo usuario</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="userName"
                onChange={handleChange}
                value={values.userName} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name="password"
                onChange={handleChange} 
                value={values.password}/>
              </Form.Group>
              <button type='onSubmit' className='btn btn-success'>Guardar</button>
            </Form>

          </div>

        )}
      </Formik>

    </>
  )
}

export default AddUser
