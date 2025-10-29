import Apresentacao from "../../components/Apresentacao";
import Avaliacoes from "../../components/Avaliacoes";
import Facilidades from "../../components/Facilidades";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Localizacao from "../../components/Localizacao";
import Quartos from "../../components/Quartos";
import SliderFotos from "../../components/SliderFotos";
import SEO from "../../components/SEO";

function Home() {
  return (
    <div>
      <SEO
        title="Pousada com Piscina a 30 Metros da Praia - Pousada Toa Toa Praia da Pipa"
        description="Pousada a 30 metros da Praia do Amor e a 500 metros do centro de Pipa. Piscina, estacionamento e cozinha compartilhada."
        keywords="pousada em pipa, pousada praia do amor, pousada com piscina, pousada praia da pipa, hotel em pipa, pousada praia de pipa, pousada praia do amor pipa"
      />
      <Header />
      <Facilidades />
      <SliderFotos />
      <Apresentacao />
      <Quartos />
      <Avaliacoes />
      <Localizacao />
      <Footer />
    </div>
  );
}

export default Home;
