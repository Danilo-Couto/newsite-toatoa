import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ResponsiveCarousel from './ResponsiveCarousel';
import BotaoReservar from './BotaoReservar';

export default function SliderFotos() {

  return (
    <div>
      <div>
        <div className="carousel-link">
          <h6>Bem vindos à</h6>
          <h1>POUSADA TOA TOA - PRAIA DA PIPA</h1>
        </div>
        <ResponsiveCarousel />
      </div>
      <BotaoReservar />
    </div>
  );
}
