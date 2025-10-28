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