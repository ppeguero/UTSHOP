
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './routes/Inicio.jsx';
import Catalogo from './routes/Catalogo.jsx';
import Contactanos from './routes/Contactanos.jsx';
import Carrito from './routes/Carrito.jsx';
import Dashboard from './routes/Dashboard.jsx';
import IndexUser from './pages-dash/IndexUser.jsx';
import AddUser from './pages-dash/AddUser.jsx'
import IndexProduct from './pages-dash/IndexProduct.jsx';
import AddProduct from './pages-dash/AddProduct.jsx';
import DeleteProduct from './pages-dash/DeleteProduct.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/catalogo',
    element: <Catalogo />,
  },
  {
    path: '/contactanos',
    element: <Contactanos />,
  },
  {
    path: '/carrito',
    element: <Carrito />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/IndexUser',
    element: <IndexUser />
  },
  {
    path: '/AddUser',
    element : <AddUser/>
  },
  {
    path: '/IndexProduct',
    element: <IndexProduct />
  },
  {
    path: '/AddProduct',
    element: <AddProduct />
  },
  {
    path: '/DeleteProduct',
    element: <DeleteProduct />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
