import Header from "../../components/Header";
import Quartos from "../../components/Quartos";

export default function ListaSuites() {
  return (
    <div>
      <title> Quartos da Pousada Toa Toa em Pipa</title>
      <meta name="description" content="Confira a lista de suítes da Pousada Toa Toa na Praia da Pipa. Encontre a acomodação ideal para sua estadia em Pipa." />
      <Header />
      <div className="rooms">
        <Quartos />
      </div>
    </div>
  );
}
