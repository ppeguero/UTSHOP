import Header from "../components/header"
import Footer from "../components/Footer"
import Bodyp from "../components/Bodyp";
import Search from "../components/Search";
import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "../components/Carousel";
import { NavLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inicio(){
    return (
        <div>
            <Header />

                <div className="border-solid border-gray-400 bg-white border-1 h-auto p-3">
                    <div className="flex items-center space-x-2 justify-end mr-2">
                        <div className="border-solid border-2 border-sky-950 p-2 w-72">
                            <input type="text" name="search" id="inputSearch" placeholder='Buscar en el catálogo' className="uppercase w-[200px] bg-white"></input>
                        </div>
                        <div className="hover:cursor-pointer">
                            <FontAwesomeIcon icon={faSearch} className="fa-2x"/>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-center mt-4 mb-4">
                    <div className="bg-teal-500 sm:w-50 p-3  text-white font-bold flex justify-center items-center lg:w-50 lg:text-2xl text-center rounded-md hover:bg-teal-600" >
                        <NavLink to="/catalogo"><p className="sm:break-normal uppercase ">Los mejores productos los encuentras en UT Shop</p></NavLink> 
                    </div>
                </div>

                {/* <div className="flex justify-center mt-2 mb-2">
                    <div className="w-1/2">
                        <CarouselComponent/>
                    </div>
                </div> */}

                
                <div className="flex justify-center">

                    <div className="w-1/2">
                        <CarouselComponent/>
                    </div>

                    <div className="flex column w-1/3 justify-around ml-10 items-center">

                        <div className="w-1/4">
                            <div className="w-28" >
                                <img src="./src/assets/gorra.png" />
                            </div>
                            <div className="text-center mt-2 mb-2">
                                <p>Gorra UT</p>
                                <p className="text-red-700">$129.00</p>
                            </div>

                        <div>
                            <div className="w-28">
                                <img src="./src/assets/MOCHI.png" />
                            </div>
                            <div className="text-center mt-2 mb2">
                                <p>Mochila UT</p>
                                <p className="text-red-700">$170.00</p>
                            </div>
                        </div>
                    
                    </div>

                    <div className="w-1/4">

                            <div className="w-28">
                                <img src="./src/assets/CHIO.png" />
                            </div>
                            <div className="text-center mt-2 mb-2">
                                <p>Gorra UT</p>
                                <p className="text-red-700">$129.00</p>
                            </div>

                            <div>
                                <div className="w-28">
                                    <img src="./src/assets/MOCHI.png" />
                                </div>
                                <div className="text-center mt-2 mb-2">
                                        <p>Gorra UT</p>
                                        <p className="text-red-700">$129.00</p>
                                </div>
                            </div>
                        
                    </div>
            
                </div>


                </div>

                <div className="flex items-center justify-center mt-4 mb-4">
                    <div className="bg-teal-500 sm:w-50 p-3  text-white font-bold flex justify-center items-center lg:w-50 lg:text-2xl text-center rounded-md hover:bg-teal-600" >
                        <NavLink to="/catalogo"><p className="sm:break-normal uppercase ">¡¡COMPRA AHORA!!</p></NavLink> 
                    </div>
                </div>

                <div className="border-solid border-gray-300 border-[1px] m-10"></div>

                <div>
                    <div>
                        <h2 className="ml-10 font-semi text-3xl mb-4">Puede que te interese...</h2>
                        <div className="flex justify-evenly">
                            <div>
                                <div>
                                    <img src="./src/assets/backpack.png" />
                                </div>
                                <div className="flex justify-center">
                                    <p>Mochila blanca</p>
                                    
                                </div>
                                <div className="mt-2 mb-6">
                                    <buton className="bg-teal-400 rounded-sm p-2 hover:bg-teal-600 hover:text-white cursor-pointer">AÑADIR A CARRITO</buton>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="./src/assets/backpack.png" />
                                </div>
                                <div className="flex justify-center">
                                    <p>Mochila blanca</p>
                                    
                                </div>
                                <div className="mt-2 mb-6">
                                    <buton className="bg-teal-400 rounded-sm p-2 hover:bg-teal-600 hover:text-white cursor-pointer">AÑADIR A CARRITO</buton>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="./src/assets/backpack.png" />
                                </div>
                                <div className="flex justify-center">
                                    <p>Mochila blanca</p>
                                    
                                </div>
                                <div className="mt-2 mb-12">
                                    <buton className="bg-teal-400 rounded-sm p-2 hover:bg-teal-600 hover:text-white cursor-pointer">AÑADIR A CARRITO</buton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            <Footer />
        </div>
   
        );    
        }
    