import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SlugQuartos from '../../components/SlugQuartos';
import SEO from '../../components/SEO';

export default function QuartosDetalhes() {
  return (
    <div>
      <SEO
        title="Quartos Privativos Com Ar Condicionado, Banheiro e Varanda Com Rede e Vista- Pousada Toa Toa Praia da Pipa"
        description="Pousada na Praia da Pipa. Suítes com ar-condicionado, banheiro privativo, sacada com rede e vista."
        keywords="suítes pousada pipa, quartos com ar condicionado, pousada praia do amor pipa, pousada com piscina pipa"
        url={typeof window !== 'undefined' ? window.location.href : 'https://pousadaempipa.com.br/suites'}
      />
      <Header />
      <main>
        <SlugQuartos />
      </main>
      <Footer />
    </div>
  );
}
