import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik} from 'formik';
import { useParams } from 'react-router-dom';

function EditProduct() {

  const { id } = useParams();

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
          image: ""
        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values);
            
            await axios.put(`http://localhost:3000/products/${id}`, {
              productName:values.productName, 
              productPrice:values.productPrice,
              productCategory: values.productCategory,
              productStock: values.productStock,
              productDescription: values.productDescription,
              image: values.image}, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
          })
            actions.resetForm()
             alert('Datos agregados correctamente');             
        }}
        >
        {({handleChange, handleSubmit, setFieldValue, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Editar un producto</h2>
            <Form onSubmit={handleSubmit}  encType="multipart/form-data">
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
              <Form.Group className='mb-3'>
                <Form.Label>
                  Imagen
                </Form.Label>
                <Form.Control type='file' name='image' accept='image/*'
                onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="productDescription"
                onChange={handleChange} 
                value={values.productDescription}/>
              </Form.Group>
              <button type='submit' className='btn btn-success'>Guardar</button>
            </Form>

          </div>

        )}
      </Formik>

    </>
  )
}

export default EditProduct
