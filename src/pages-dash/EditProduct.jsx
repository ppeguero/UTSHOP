import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function EditProduct() {
  return (
    <>
      <NavDash />

      <Formik
        initialValues={{
          productName: "",
          productPrice: "",
          productCategory: "",
          productStock: "",
          productDescription: "",

        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values)
            await axios.patch('http://localhost:3000/products', values)
            actions.resetForm()
             alert('Datos agregados correctamente')
          
             
        }}
        >
        {({handleChange, handleSubmit, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">  Editar producto</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" name="productName"
                onChange={handleChange}
                value={values.productName} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" name="productPrice"
                onChange={handleChange} 
                value={values.productPrice}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Categoria</Form.Label>
                <Form.Control type="text" name="productCategory"
                onChange={handleChange} 
                value={values.productCategory}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" name="productStock"
                onChange={handleChange} 
                value={values.productStock}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="productDescription"
                onChange={handleChange} 
                value={values.productDescription}/>
              </Form.Group>
              <button type='onSubmit' className='btn btn-success'>Guardar</button>
            </Form>

          </div>

        )}
      </Formik>

    </>
  )
}

export default EditProduct
