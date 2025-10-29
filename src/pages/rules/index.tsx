import Header from "../../components/Header";
import Rules from "../../components/Regras";
import SEO from "../../components/SEO";

export default function Regras() {
  return (
    <div>
      <SEO
        title="Pousada Toa Toa - Regas e Políticas de Hospedagem" 
        description= "Regras e políticas da Pousada Toa Toa em Pipa — informações sobre check-in check-out, crianças, pets, cancelamentos e convivência."
        url="https://www.pousadaempipa.com.br/rules"
      />
      <Header />
      <main>
        <Rules /> 
      </main>
  </div>

  )
}