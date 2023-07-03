/* eslint-disable react/no-unknown-property */

import { faBorderAll, faImages } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Bodyp() {
  return (
    
    

      <><div
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1195045207/es/foto/los-fines-de-semana-est%C3%A1n-destinados-a-ser-gastados-mim%C3%A1ndose-a-s%C3%AD-mismo.jpg?s=612x612&w=0&k=20&c=Z63P1ch_pvQSvBUFPOLCF-yvvvWDQzdgZLLsLtvQayI=)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '35cm',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        msImeAlign: 'auto'
      }}
    >
      <div style={{
        textAlign: 'center',
        top: '50%',
        left: '50%',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
      }}></div>
      <h1>Los mejores productos los encuentras solo en UT SHOP</h1>


      <div className="flex items-center">
        <a href="./Bodyp.jsx" className="mr-4">
          <i className="icon=fa-solid fa-bars"></i>
        </a>

      </div>
    </div><div className="w-6xl w-full m-auto">
        <div className="bg-fond via-slate-500 p-10 flex flex-col items-center gap-16">
        
          <div>
           <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"><NavLink to="/catalogo">COMPRAR AHORA</NavLink></button>    
         </div>
        </div>
      </div><div className="container mx-auto mt-8">
        <div className="max-w-9/10 max-h-9/10">
          <div className="flex justify-center items-center">
            <div className="m-4">MAS VENDIDO</div>

            <img src={faImages} alt="blusa chica" />

          </div>
        </div>
      </div><div className="grid grid-cols-5"></div><card nombre="mochilas" /><card nombre="mochilas" /><card nombre="mochilas" /><card nombre="mochilas" /><card nombre="mochilas" /></>
        );
        }
        export default Bodyp;


      
