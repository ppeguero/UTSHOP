import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import IrArriba from './IrArriba';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-teal-500 py-6 mt-auto">
        <div className="container mx-auto px-2 text-white">
            <div className='flex justify-between items-center pb-6'>
                <div className='bg-white border-solid border-inherit w-1/2 h-px ml-24'></div>
                <div className='border-solid border-white border-2'><button className='hover:text-slate-950 px-6 py-1 hover:bg-white transition duration-300'></button><IrArriba /></div>
                <div className='bg-white border-solid border-inherit w-1/2 h-px mr-24'></div>
            </div>
            <div className="flex justify-between items-center px-10">
                <div>
                    <p className="text-base font-inter">Copyright © 2017. Universidad Tecnológica de Cancún</p>
                </div>
                <div className='flex space-x-4 mr-6'>
                    <a href="https://www.facebook.com/UTdeCancun" target='_blank'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="http://www.utcancun.edu.mx/" target='_blank'><FontAwesomeIcon icon={faGlobe} /></a>
                </div>
            </div>
            <div>
                <NavLink to="/Login"><p className='text-sm hover:underline mt-2 px-10'>Inicio de sesión administradores</p></NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer