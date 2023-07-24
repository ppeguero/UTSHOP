import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function EditProduct({ productId }) {
  // State para guardar los datos del producto a editar
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productStock: "",
    productDescription: "",
    image: ""
  });

  // Función para cargar los datos del producto existente
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        const product = response.data; // Asumiendo que la API devuelve el producto correspondiente al ID proporcionado
        setProductData({
          productName: product.productName,
          productPrice: product.productPrice,
          productCategory: product.productCategory,
          productStock: product.productStock,
          productDescription: product.productDescription,
          image: product.image,
        });
      } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <>
      <NavDash />

      <Formik
        initialValues={productData}
        onSubmit={async (values, actions) => {
          console.log(values);

          // Lógica para actualizar el producto en la API
          try {
            await axios.put(`http://localhost:3000/products/${productId}`, {
              productName: values.productName,
              productPrice: values.productPrice,
              productCategory: values.productCategory,
              productStock: values.productStock,
              productDescription: values.productDescription,
              image: values.image,
            }, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            actions.resetForm();
            alert('Datos actualizados correctamente');
          } catch (error) {
            console.error("Error al actualizar el producto:", error);
            alert('Error al actualizar el producto');
          }
        }}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <div className='container mx-15 w-50 p-20'>
            <h2 className="font-black text-3lx text-center">Editar producto</h2>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3">
                <Form.Label>Producto</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  onChange={handleChange}
                  value={values.productName}
                />
              </Form.Group>
              {/* Resto de campos del formulario con sus respectivas etiquetas */}
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  name="productPrice"
                  onChange={handleChange}
                  value={values.productPrice}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  name="productCategory"
                  onChange={handleChange}
                  value={values.productCategory}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  name="productStock"
                  onChange={handleChange}
                  value={values.productStock}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Imagen
                </Form.Label>
                <Form.Control
                  type='file'
                  name='image'
                  accept='image/*'
                  onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  name="productDescription"
                  onChange={handleChange}
                  value={values.productDescription}
                />
              </Form.Group>
              <button type='submit' className='btn btn-success'>Guardar cambios</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default EditProduct;
