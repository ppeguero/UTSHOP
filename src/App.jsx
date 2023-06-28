
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './routes/Inicio.jsx';
import Catálogo from './routes/Catálogo.jsx';
import Contáctanos from './routes/Contáctanos.jsx';
import Carrito from './routes/Carrito.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/catálogo',
    element: <Catálogo />,
  },
  {
    path: '/contáctanos',
    element: <Contáctanos />,
  },
  {
    path: '/carrito',
    element: <Carrito />,
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
