import UTSHOPLogo from '/src/assets/UTSHOP_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header() {
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
                  <a href="/carrito"><FontAwesomeIcon icon={faShoppingCart} /></a>
                </li>
                <li>
                  <a href="/contáctanos"><FontAwesomeIcon icon={faPhone} /></a>
              </li>
            </ul>
          </nav>
      </header>
  )
}

export default Header 