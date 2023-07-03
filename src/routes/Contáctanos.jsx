import Header from "../components/header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Form from "../components/Form"

export default function Contáctanos(){
    return (
        <div className="min-h-screen flex flex-col">
        <Header />

        <div className="relative ">
            <img
            src="src/assets/contacto.jpg"
            className="lg:w-screen lg:h-80 w-screen h-48 object-cover contrast-50"
            alt="Imagen"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="absolute left-24 top-16 mt-2">
                    <p className="text-white text-xl font-bold">Contáctanos</p>
                </div>
                <div className="absolute left-24 top-28">
                    <p className="text-white text-5xl font-bold">Podemos</p>
                    <p className="text-white text-6xl font-bold">ayudarte</p>
                </div>
            </div>
            

            <div className="flex items-end p-16 justify-around">
                <div className="">
                    <FontAwesomeIcon icon={faBuilding} style={{color: "#000000",}} className="fa-8x"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} className="fa-8x"/>
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} className="fa-8x" />
                </div>
            </div>

            <div className="flex items-center space-x-72 mb-12">
                <div className="text-center flex flex-col ml-40">
                    <h3 className="font-bold text-teal-500 italic text-2xl">Nuestra oficina</h3>
                    <p className="mt-2 text-teal-500">Carretera Cancún-Aeropuerto,</p>
                    <p className="text-teal-500">SM 299-km, 11.5, 77565 Q,R</p>
                </div>
                <div className="text-center flex flex-col">
                    <h3 className="font-bold text-teal-500 italic text-2xl">Datos de contacto</h3>
                    <p className="mt-2 text-teal-500">998 881 1900</p>
                </div>
                <div className="text-center flex flex-col">
                    <h3 className="font-bold text-teal-500 italic text-2xl">E-MAIL</h3>
                    <p className="mt-2 text-teal-500">utshop@gmail.com</p>
                </div>
            </div>

        </div>

        <div className="flex justify-center">
            
        </div>


        <Footer />
        </div>

    )
}