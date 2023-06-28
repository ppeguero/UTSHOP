import UTSHOPLogo from '/src/assets/UTSHOP_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
      <header className="shadow-lg flex items-center">
          <nav className='py-4 flex justify-end w-1/2 ml-6'>
            <ul className='flex items-center'>
              <li>
                <a href="/" className=""><img src={UTSHOPLogo} className="w-24"></img></a>
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