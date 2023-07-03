import Header from "../components/header"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";

export default function Carrito(){
    return (
        <div className="min-h-screen flex flex-col">

            <Header />

            <nav className="w-90 h-16 flex items-center flex-shrink-0 border border-gray-400 bg-white shadow-inner">
                <div className="w-1/2 flex justify-center">
                    <p className="text-black text-base font-inter font-light">PAGO SEGURO</p>
                </div>
                <div className="w-1/2 flex justify-center ">
                    <NavLink to="/catalogo" className="flex space-x-3">
                        <div>
                            <p className="text-black text-base font-inter font-light hover:text-gray-400">SEGUIR COMPRANDO </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPlay} style={{color: "#9ca3af",}}/> 
                        </div>
                    </NavLink>
                </div>
            </nav>

                <div className="bg-zinc-200 h-auto flex items-center justify-center p-20">
                    <div className="bg-white h-96 w-full sm:w-4/5 flex items-center justify-center drop-shadow-md">
                        <div className="flex items-center flex-col ">
                            <div className="mb-8">
                                <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} className="fa-4x" />                        
                            </div>
                            <div>
                                <h1 className="font-bold text-black text-2xl mb-6 text-center">TU CARRITO ESTÁ VACÍO</h1>
                            </div>          
                            <div>
                                <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"><NavLink to="/catalogo">COMPRAR AHORA</NavLink></button>    
                            </div>                  
                        </div>
                    </div>
                </div>

            <div className="bg-white h-auto flex p-12">
                <div className="flex justify-start">
                    <h3 className="font-bold text-black text-xl">LO MÁS VENDIDO</h3>
                </div>
            </div>

            <Footer />
        </div>
    )
}