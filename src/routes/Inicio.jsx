import Header from "../components/header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom";
import Bodyp from "../components/Bodyp";
import Search from "../components/Search";
import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "../components/Carousel";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inicio(){
    return (
        <div>
            <Header />

                <nav className="bg-teal-500 border-2 border-solid border-teal-600 sm: p-3">
                    <ul className="flex text-white text-sm drop-shadow-lg lg:space-x-8 lg:ml-6 lg:p-2 lg:text-lg sm:space-x-4 sm:ml-2 ">
                        <NavLink to="/">
                            <li className="hover:text-zinc-200">Inicio</li>
                        </NavLink>
                        <NavLink to="/Catalogo">
                            <li className="hover:text-zinc-200">Catálogo</li>
                        </NavLink>
                    </ul>
                </nav>

                <section className="relative">
                    <img className="object-cover static contrast-50 sm:object-center hue-rotate-15 lg:h-96  sm: w-[100%] sm:h-40" src="./src/assets/carousel-3.jpg"></img>
                    
                    <h1 className="w-80 absolute inset-y-32 right-40 text-5xl text-center font-bold text-white drop-shadow-xl">Tus <span className="text-teal-500">productos</span>  favoritos...</h1>
                    <h2 className="absolute inset-y-60 right-56 font-bold text-white drop-shadow-sm text-2xl">en un <span className="text-teal-500">solo</span> lugar.</h2>

                    <div className="absolute inset-y-72 right-64">
                        <NavLink to="/catalogo">
                            <button className="rounded-lg  bg-teal-500 text-white p-2 hover:bg-teal-400 drop-shadow-md ">Ir al catálogo</button>
                        </NavLink>
                    </div>
                </section>

                <section>

                    <div className="flex flex-wrap mt-24 justify-center space-x-72 mb-24" >

                        <div className="bg-gray-200 w-52 h-52 flex row">
                            <div>
                                <h3 className="flex justify-center text-2xl text-teal-500 font-bold mt-2">Elige</h3>
                            </div>  
                            <div className="flex justify-center">
                                <img src="./src/assets/T-SHIRT.png" className="w-20"></img>
                            </div>
                            <div className="">
                                <p className="text-center text-teal-500 font-semibold drop-shadow-sm">los productos de tu universidad favorita.</p>
                            </div>
                        </div>

                        <div className="bg-gray-200 w-52 h-52 flex row">
                            <div>
                                <h3 className="flex justify-center text-2xl text-teal-500 font-bold mt-2">Paga</h3>
                            </div>  
                            <div className="flex justify-center">
                                <img src="./src/assets/PAYMENT.png" className="w-20"></img>
                            </div>
                            <div className="">
                                <p className="text-center text-teal-500 font-semibold drop-shadow-sm">completamente en línea. Sin filas. Ni atrasos.</p>
                            </div>
                        </div>

                        <div className="bg-gray-200 w-52 h-52 flex row">
                            <div>
                                <h3 className="flex justify-center text-2xl text-teal-500 font-bold mt-2">Recoge</h3>
                            </div>  
                            <div className="flex justify-center">
                                <img src="./src/assets/DELIVER.png" className="w-20"></img>
                            </div>
                            <div className="">
                                <p className="text-center text-teal-500 font-semibold drop-shadow-sm">en tu tienda de la UT.</p>
                            </div>
                        </div>
                        
                    </div>


                </section>

                <section className="w-[100%] bg-teal-500">

                    <div className="flex items-center">
                        <div className="p-12">
                            <h2 className="text-5xl text-white drop-shadow-sm">Tu también sé parte de la familia UT</h2>
                        </div>

                        <div className="mr-48 flex justify-end">
                            <p className="font-light text-white lg:w-2/5">
                                Escoge entre una variedad de productos de la Universidad
                                Tecnológica de Cancún que te ayudarán a estar a la moda, ser
                                funcional y el estudiante más BIS del campus.
                            </p>
                        </div>
                    </div>


                    <div className="w-100% flex mx-10 space-x-10 mb-10">

                        <div className="flex-1">
                            <img src="./src/assets/ESTUDIANTE-1.jpg" className="w-full" alt="Imagen 1" />
                        </div>

                        <div className="flex-1">
                            <img src="./src/assets/ESTUDIANTE-2.webp" className="w-full" alt="Imagen 2" />
                        </div>
                    </div>


                    <div className="bg-white pt-10">

                        <div className="flex justify-center">
                            <h2 className="text-teal-500 text-5xl font-semibold text-center w-1/4">¿Dónde recojo mis productos?</h2>
                        </div>

                        <div className="flex items-center p-10">

                                <div className="flex-1 ml-28">
                                    <iframe className="w-96 h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.849903223069!2d-86.84709312504087!3d21.049695191782323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e81c385c4677f%3A0x539479cfc0929edb!2sUniversidad%20Tecnol%C3%B3gica%20de%20Canc%C3%BAn%2C!5e0!3m2!1ses-419!2smx!4v1689980658216!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div className="flex-1 ml-28 space-y-2">
                                    <div className="w-3/4 ">
                                        <p className="text-teal-500 font-light text-center">
                                            Visita la tienda física en el edificio B de la Universidad
                                            Tecnológica de Cancún para recoger tus productos.
                                        </p>
                                    </div>

                                    <div>
                                        <img src="./src/assets/EDIFICIO B.jpg" className="w-3/4 object-cover" alt="Edificio B"></img>
                                    </div>
                                </div>

                        </div>


                    </div>
                </section>

            <Footer />
        </div>
   
        );    
        }
    