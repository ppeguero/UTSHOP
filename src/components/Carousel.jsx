import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carousel
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <div className="flex justify-center items-center">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img src="./src/assets/carousel-1.jpg" alt="Imagen 1" />
            <p className="legend">Paga y recoge, ¡tan fácil como eso!</p>
          </div>
          <div>
            <img src="./src/assets/carousel-2.jpg" alt="Imagen 2" />
            <p className="legend">Viste los colores de tu Universidad</p>
          </div>
          <div>
            <img src="./src/assets/carousel-3.jpg" alt="Imagen 3" />
            <p className="legend">Sé la envidia de todo tus amigos con nuestros productos</p>
          </div>
        </Carousel>
    </div>
  );
};

export default CarouselComponent;