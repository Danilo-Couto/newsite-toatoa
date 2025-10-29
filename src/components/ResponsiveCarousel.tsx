import imagensPousada from '../data/imagens-pousada';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ResponsiveCarousel() {
  const images = imagensPousada;

  return (
      <Carousel
        autoPlay
        showArrows
        emulateTouch
        infiniteLoop
        transitionTime={1}
        showThumbs={false} 
      >
        {images.areasComuns.sort().map((image, index) => (
          <div key={index} className="carousel-div">
            <img loading='lazy' decoding="async" src={image} alt={`Slide ${index+1}`} className="carousel-img" />
          </div>
        ))}
      </Carousel>
  );
}
