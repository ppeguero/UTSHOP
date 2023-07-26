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

                <nav className="bg-teal-500 border-2 border-solid border-teal-600 p-3">
                    <ul className="flex text-white text-sm drop-shadow-lg lg:space-x-8 lg:ml-6 lg:p-2 xl:text-lg space-x-4 ml-2 ">
                        <NavLink to="/">
                            <li className="hover:text-zinc-200">Inicio</li>
                        </NavLink>
                        <NavLink to="/Catalogo">
                            <li className="hover:text-zinc-200">Catálogo</li>
                        </NavLink>
                    </ul>
                </nav>

                <section className="relative">
                    <img className="object-cover static contrast-50 object-center hue-rotate-15 xl:h-96 w-[100%] h-40" src="./src/assets/carousel-3.jpg"></img>
                    <div className="xl:ml-0 ml-[15px] xl:mt-0 mt-[-45px]">
                        <h1 className="w-80 absolute xl:inset-y-32 inset-y-16 xl:right-40 xl:text-5xl text-xl xl:text-center font-bold text-white drop-shadow-xl ">Tus <span className="text-teal-500">productos</span>  favoritos...</h1>
                        <h2 className="absolute xl:inset-y-60 xl:left-[74%] left-[16px] top-[81px] xl:right-56 font-bold text-white drop-shadow-sm text-xl">en un <span className="text-teal-500">solo</span> lugar.</h2>
                        <div className="absolute xl:inset-y-72 inset-y-28 xl:right-64">
                         <NavLink to="/catalogo">
                             <button className="rounded-lg bg-teal-500 text-white p-2 hover:bg-teal-400 drop-shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Ir al catálogo</button>
                        </NavLink>
                        </div>
                    </div>    
                </section>

                <section>

                    <div className="flex xl:flex-row flex-col mt-24 justify-center xl:space-x-72 items-center mb-24 " >

                        <div className="bg-gray-200 mb-4 w-52 h-52 flex row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md">
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

                        <div className="bg-gray-200 mb-4 w-52 h-52 flex row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md">
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

                        <div className="bg-gray-200 w-52 h-52 flex row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md">
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

                    <div className="flex xl:flex-row flex-col items-center">
                        <div className="xl:p-12 p-12 pb-2">
                            <h2 className="text-5xl text-white drop-shadow-sm">Tu también sé parte de la familia UT</h2>
                        </div>

                        <div className="xl:mr-48 xl:p-0 p-12 flex xl:justify-end">
                            <p className="font-light text-white lg:w-2/5">
                                Escoge entre una variedad de productos de la Universidad
                                Tecnológica de Cancún que te ayudarán a estar a la moda, ser
                                funcional y el estudiante más BIS del campus.
                            </p>
                        </div>
                    </div>


                    <div className="w-100% flex xl:flex-row flex-col mx-10 xl:space-x-10 xl:mb-10">

                        <div className="flex-1">
                            <img src="./src/assets/ESTUDIANTE-1.jpg" className="xl:w-full w-[640px] xl:pb-0 pb-2 rounded-sm" alt="Imagen 1" />
                        </div>

                        <div className="flex-1 xl:pb-0 pb-4">
                            <img src="./src/assets/ESTUDIANTE-2.webp" className="xl:w-full w-[640px] rounded-sm" alt="Imagen 2" />
                        </div>
                    </div>


                    <div className="bg-white pt-10">

                        <div className="flex xl:flex-row xl:ml-0 ml-4 flex-col justify-center">
                            <h2 className="text-teal-500 text-5xl font-semibold text-center w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">¿Dónde recojo mis productos?</h2>
                        </div>

                        <div className="flex xl:flex-row flex-col items-center p-10">

                                <div className="flex-1 xl:ml-28 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <iframe className="xl:w-96 xl:h-96 w-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.849903223069!2d-86.84709312504087!3d21.049695191782323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e81c385c4677f%3A0x539479cfc0929edb!2sUniversidad%20Tecnol%C3%B3gica%20de%20Canc%C3%BAn%2C!5e0!3m2!1ses-419!2smx!4v1689980658216!5m2!1ses-419!2smx" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div className="flex-1 xl:ml-28 space-y-2">
                                    <div className="w-3/4 xl:p-0 p-4 xl:ml-0 ml-8">
                                        <p className="text-teal-500 font-light text-center">
                                            Visita la tienda física en el edificio B de la Universidad
                                            Tecnológica de Cancún para recoger tus productos.
                                        </p>
                                    </div>

                                    <div>
                                        <img src="./src/assets/EDIFICIO B.jpg" className="xl:w-3/4 object-cover" alt="Edificio B"></img>
                                    </div>
                                </div>

                        </div>


                    </div>
                </section>

            <Footer />
        </div>
   
        );    
        }
    