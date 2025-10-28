import { Link, useParams } from 'react-router-dom';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import BotaoReservar from './BotaoReservar';
import { useLocaleContext } from '../services/LocaleContext';

import { pousadaContent as pousadaContentPt } from "../locales/pt/pousada-content";
import { pousadaContent as pousadaContentEn } from "../locales/en/pousada-content-en";
import { pousadaContent as pousadaContentFr } from "../locales/fr/pousada-content-fr";
import { pousadaContent as pousadaContentGr } from "../locales/gr/pousada-content-gr";
import { pousadaContent as pousadaContentEs } from "../locales/es/pousada-content-es";

interface SuiteType { 
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imagesPaths: string[];
}

export default function SlugQuartos() {
  const params = useParams();
  const param = params.suite;
   
  const { locale } = useLocaleContext();

  let pousadaContent = pousadaContentPt;

  if (locale === 'pt') pousadaContent = pousadaContentPt;
  if (locale === 'en') pousadaContent = pousadaContentEn;
  if (locale === 'es') pousadaContent = pousadaContentEs;
  if (locale === 'fr') pousadaContent = pousadaContentFr;
  if (locale === 'gr') pousadaContent = pousadaContentGr;
  
  const allSuites = Object.values(pousadaContent)
    .flatMap(category => Object.values(category));

  const currSuite = allSuites.find(e => e.slug === param) as SuiteType | undefined;

  return currSuite ? (
    <div className='suite-detalhe'>
      <h1>{currSuite.title}</h1>
      <p>{currSuite.description}</p>

      <ResponsiveCarousel
        autoPlay showArrows emulateTouch infiniteLoop thumbWidth={200} transitionTime={1}
        >
        {currSuite.imagesPaths.map((image, index) => (
          <div key={index}>
            <img
              className="carousel-img"
              src={image}
              alt={`Imagem da suíte - ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </ResponsiveCarousel>
      
      <BotaoReservar/>
    </div>
  ) : (
    <div>
      <p>Suíte não disponível</p>
      <Link to="/" className="back-to-home-button">
        Voltar para Home Page
      </Link> 
    </div>
  );
}


