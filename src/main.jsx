import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './routes/Inicio.jsx';
import Catálogo from './routes/Catálogo.jsx';
import Contáctanos from './routes/Contáctanos.jsx';
import Carrito from './routes/Carrito.jsx';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)
