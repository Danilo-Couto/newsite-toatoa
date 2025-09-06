import '../styles/General.css';
import { pousadaContent as pousadaContentPt } from "../locales/pt/pousada-content";
import { pousadaContent as pousadaContentEn } from "../locales/en/pousada-content-en";
import { pousadaContent as pousadaContentFr } from "../locales/fr/pousada-content-fr";
import { pousadaContent as pousadaContentGr } from "../locales/gr/pousada-content-gr";
import { pousadaContent as pousadaContentEs } from "../locales/es/pousada-content-es";

import { QuartosSuperiores } from "./QuartosSuperiores";
import { QuartosTerreos } from "./QuartosTerreos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faShower, faSnowflake, faTv, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useLocaleContext } from '../services/LocaleContext';

export default function Quartos() {
  const { t } = useTranslation();
  const { locale } = useLocaleContext();

  let pousadaContent = pousadaContentPt;

  if (locale === 'pt') pousadaContent = pousadaContentPt;
  if (locale === 'en') pousadaContent = pousadaContentEn;
  if (locale === 'es') pousadaContent = pousadaContentEs;
  if (locale === 'fr') pousadaContent = pousadaContentFr;
  if (locale === 'gr') pousadaContent = pousadaContentGr;
  
  return (
    <div>
      <h2>{t('SUÍTES')}</h2>
      <div className='amenities'>
        <div>
          <FontAwesomeIcon icon={faSnowflake} /> <span>{t('ar')}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faUtensils} /> <span>{t('frigobar')}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faTv} /> <span>{t('TV')}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faDoorOpen} /> <span>{t('sacada')}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faShower} /> <span>{t('banheiro')}</span>
        </div>
      </div>
      <div className="rooms">
        <h3>{t('quartosDescr')}</h3>
        <QuartosSuperiores qrtosSuperiores={pousadaContent.qrtsSuperiores} />
        <h3>{t('quartosTitulo')}</h3>
        <QuartosTerreos qrtTerreos={pousadaContent.qrtsTerreos} />
      </div>      
    </div>
  );
}
