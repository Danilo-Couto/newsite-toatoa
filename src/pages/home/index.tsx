import Apresentacao from "../../components/Apresentacao";
import Avaliacoes from "../../components/Avaliacoes";
import Facilidades from "../../components/Facilidades";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Localizacao from "../../components/Localizacao";
import Quartos from "../../components/Quartos";
import SliderFotos from "../../components/SliderFotos";

function Home() {
  return (
    <div>
      <title>Pousada Com Piscina a 30 Metros da Praia - Pousada Toa Toa - Praia da Pipa</title>
      <meta name="description" content="Pousada a 30 metros DA PRAIA do AMOR e a 500 metros do CENTRO DE PIPA. Temos PISCINA, ESTACIONAMENTO, COZINHA COMPARTILHADA." />
      {/* <Menu /> */}
      <Header />
      <Facilidades /> 
      <SliderFotos />
      <Apresentacao />
      <Quartos />
      <Avaliacoes/>
      <Localizacao /> 
      <Footer />
  </div>

  )
}

export default Home;