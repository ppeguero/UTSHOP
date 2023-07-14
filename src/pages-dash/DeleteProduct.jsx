// eslint-disable-next-line no-unused-vars 
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import NavDash from './NavDash'

 
const DeleteProduct = () => { 
  const [Products, setProductos] = useState([]); 
 
  useEffect(() => { 
    fetchProductos(); 
  }, []); 
 
  const fetchProductos = async () => { 
    try { 
      const response = await axios.get('http://localhost:3000/products'); 
      setProductos(response.data); 
    } catch (error) { 
      console.log(error); 
    } 
  }; 
 
  const handleDelete = async (pkProduct) => { 
    try { 
      if (!pkProduct) { 
        console.log('ID del producto no válido'); 
        console.log(pkProduct) 
        return; 
      } 
      await axios.delete(`http://localhost:3000/products/${pkProduct}`); 
      fetchProductos(); 
      alert('Datos eliminados correctamente')
    } catch (error) { 
      console.log(error); 
    } 
  }; 
 
 
  return ( 
    
    <div> 

        <NavDash />

      <div className='container ml-72 mx-20 w-50 h-screen p-10'> 
      <h2 className=' text-3xl font-semibold mb-6'>Eliminar un producto</h2> 
      <table className="w-[90%] text-center"> 
        <thead> 
          <tr> 
            <th>Nombre</th> 
            <th>Precio</th> 
            <th>Categoria</th> 
            <th>Stock</th> 
            <th>Descripcion</th> 
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
                <button onClick={() => handleDelete(products.pkProduct)} className='btn btn-danger mr-auto'>Eliminar</button> 
              </td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
      </div> 
    </div> 
  ); 
}; 
 
export default DeleteProduct;