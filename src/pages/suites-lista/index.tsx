import Header from "../../components/Header";
import Quartos from "../../components/Quartos";
import SEO from "../../components/SEO";

export default function ListaSuites() {
  return (
    <div>
      <SEO
        title="Quartos e Suítes da Pousada Toa Toa em Pipa"
        description="Confira a lista de quartos e suítes da Pousada Toa Toa na Praia da Pipa. Encontre a acomodação ideal para sua estadia em Pipa."
        keywords="suítes pousada pipa, quartos pousada toa toa, pousada praia da pipa, casa praia da pipa, quartos pousada pipa"
        url="https://pousadaempipa.com.br/suites"
      />

      <Header />
      <main>
        <div className="rooms">
          <Quartos />
        </div>
      </main>
    </div>
  );
}
