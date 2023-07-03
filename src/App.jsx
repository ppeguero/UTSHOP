
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './routes/Inicio.jsx';
import Catalogo from './routes/Catalogo.jsx';
import Contactanos from './routes/Contactanos.jsx';
import Carrito from './routes/Carrito.jsx';
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
