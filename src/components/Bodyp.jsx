/* eslint-disable react/no-unknown-property */

import { faBorderAll, faImages } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import img from '../assets/image4.jpg'
import imgs from '../assets/MOCHI.png'
import imgi from '../assets/gorra.png'
import imm from '../assets/CHIO.png'
import imgn from '../assets/cono.jpeg'
import inm from '../assets/image1.jpg'
import imgg from '../assets/TERMO.png'
import ima from '../assets/image3.jpg'
import imm2 from '../assets/image2.jpg'



     
function Bodyp() {
  return (
    <><><><div
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1195045207/es/foto/los-fines-de-semana-est%C3%A1n-destinados-a-ser-gastados-mim%C3%A1ndose-a-s%C3%AD-mismo.jpg?s=612x612&w=0&k=20&c=Z63P1ch_pvQSvBUFPOLCF-yvvvWDQzdgZLLsLtvQayI=)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '35cm',
        height: '250px',
        display: 'flex-center',
        justifyContent: 'center',
        alignItems: 'center',
        msImeAlign: 'auto',
        position: 'relative'
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
      <div className='m-4 flex-col text-white font-extrabold text-4xl tracking-wide'>
        <h1 className='flex justify-center'>Los mejores productos los encuentras solo en</h1>
        <h1 className='flex justify-center'> UT SHOP</h1>
      </div>

      <div className="flex items-center">
        <a href="./Bodyp.jsx" className="mr-4">
          <i className="icon=fa-solid fa-bars"></i>
        </a>

      </div>
    </div><div className="w-6xl w-full absolute top-1/2 -translate-y-[40%] m-auto">
        <div className="bg-fond via-slate-500 p-10 flex flex-col items-center gap-16">

          <div>
            <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"></button><NavLink to="/catalogo">COMPRAR AHORA</NavLink>
          </div>
        </div>
      </div><div className="m-4 text-black font-bold text-center text text-2xl">TOP VENTAS</div><div className="container mx-auto  mt-8">
        <div className="max-w-9/10 max-h-9/10">
          <div className="flex justify-center   items-center">

            <div className='grid flex-row justify-between gap-4  px-8  mx-auto grid-cols-4 '>

              <img src={img} alt="blusa chica" className='w-80 h-80 place-item-center' />            
              <img src={imgs} alt="blusa chica" className='w-80 h-80 place-item-center' />
              <img src={imgi} alt="blusa chica" className='w-80 h-80 place-item-center' />
              <img src={imm} alt="blusa chica" className='w-80 h-80 place-item-center' />
              <span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
            </div>
          </div>
        </div>

      </div></><> 
     <>
     <div className="m-4 text-black font-bold text-center text text-2xl">#UTSHOP</div><div className="container mx-auto  mt-8">
        <div className="max-w-9/10 max-h-9/10">
          <div className="flex justify-center   items-center"></div>

     <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/CHIO.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
</div>
</div>
</div>
     
     <div className="m-4 text-black font-bold text-center text text-2xl">Conoce  mas de Nuestra Tienda</div><div className="container mx-auto  mt-8">
            <div className="max-w-9/10 max-h-9/10">
              <div className="flex justify-center   items-center">
              </div>
            </div>
          </div>
          <div className='grid flex-row justify-between gap-4  px-8  mx-auto grid-cols-4 '>

<img src={inm} alt="blusa chica" className='w-80 h-80 place-item-center' />            
<img src={ima} alt="blusa chica" className='w-80 h-80 place-item-center' />
<img src={imgg} alt="blusa chica" className='w-80 h-80 place-item-center' />
<img src={imm2} alt="blusa chica" className='w-80 h-80 place-item-center' />
<span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
              <span classname="font-bol"> precio: $120.00</span>
</div>

          </></></>
  </>
  
 

 
       );
      }
      export default Bodyp;