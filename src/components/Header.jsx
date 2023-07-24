import UTSHOPLogo from '/src/assets/UTSHOP_logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

function Header() {
  const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);
  return (
      <header className="shadow-lg list-none flex items-center justify-center">
          <nav className='py-4 flex justify-end w-1/2 ml-24'>
            <ul className='flex items-center'>
              <li>
                <NavLink to="/" className=""><img src={UTSHOPLogo} className="w-24"></img></NavLink>
              </li>
            </ul>
          </nav>
          <nav className='flex justify-end w-1/2'>
            <ul className='flex space-x-10 mr-14'>
              <li>
                  <Link to="/carrito" ><FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems.length > 0 && (
                      <div>{itemCount}</div>
                    )}
                    </Link>
                </li>
                <li>
                  <a href="/contactanos"><FontAwesomeIcon icon={faPhone} /></a>
              </li>
            </ul>
          </nav>
      </header>
  )
}

export default Header 