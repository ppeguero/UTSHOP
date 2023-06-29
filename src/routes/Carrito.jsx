import Header from "../components/header"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";

export default function Carrito(){
    return (
        <div className="min-h-screen flex flex-col">

            <Header />

            <nav className="w-90 h-16 flex items-center flex-shrink-0 border border-gray-400 bg-white shadow-lg">
                <div className="w-1/2 flex justify-center">
                    <p className="text-black text-base font-inter font-light">PAGO SEGURO</p>
                </div>
                <div className="w-1/2 flex justify-center ">
                    <NavLink to="/catálogo" className="flex space-x-3">
                        <div>
                            <p className="text-black text-base font-inter font-light hover:text-gray-400">SEGUIR COMPRANDO </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPlay} style={{color: "#9ca3af",}}/> 
                        </div>
                    </NavLink>
                </div>
            </nav>

            <Footer />
        </div>
    )
}