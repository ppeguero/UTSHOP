import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer className="bg-teal-500 py-12">
        <div className="container mx-auto px-2 text-white">
            <div className="flex justify-between items-center px-10">
                <div>
                    <p className="text-base font-inter">Copyright © 2017. Universidad Tecnológica de Cancún</p>
                </div>
                <div className='flex space-x-4 mr-6'>
                    <a href="https://www.facebook.com/UTdeCancun" target='_blank'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="http://www.utcancun.edu.mx/" target='_blank'><FontAwesomeIcon icon={faGlobe} /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer