import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import CartState from "./Context/Cart/CartState.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

    <CartState>
      <App />
    </CartState>
)
