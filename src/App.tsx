import '../src/styles/Global.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ListaSuites from './pages/suites-lista';
import QuartosDetalhes from './pages/slug-suites';
import Regras from './pages/rules';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <title>Pousada Toa Toa - Praia da Pipa</title>
      <meta name="description" content="Pousada em Pipa a 30 metros da Praia do Amor e 500 metros do centro de Pipa. Piscina, estacionamento, cozinha compartilhada, WI-FI" />
      <meta name="keywords" content="pousada em pipa, pousadas em pipa, hotel em pipa, pousada praia da pipa, pousada praia do amor, pousada praia do amor pipa, hotel praia do amor pipa, hotel praia da pipa" />
      <Routes>
        <Route path="suites/:suite" element={<QuartosDetalhes />} />
        <Route path="suites" element={<ListaSuites />} />
        <Route path="rules" element={<Regras />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Analytics/>
    </div>
  );
}

export default App;