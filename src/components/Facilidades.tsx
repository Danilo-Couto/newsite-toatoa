import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faParking, faSwimmer, faUtensils, faUmbrellaBeach, faCity } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Facilidades() {

  const {t} = useTranslation();

  return (
    <div className='amenities'>
      <div 
        className='amenities-icons'>
        <FontAwesomeIcon icon={faUmbrellaBeach}  />
        <span>{t('daPraia')}</span>
      </div>
      <div
        className='amenities-icons'>
        <FontAwesomeIcon icon={faCity} /> 
        <span>{t('doCentro')}</span>
      </div>
      <div
        className='amenities-icons'>
        <FontAwesomeIcon icon={faWifi} />
        <span>{t('wifi')}</span>
      </div>
      <div
        className='amenities-icons'>
        <FontAwesomeIcon icon={faParking} /> 
        <span>{t('estacionamento')}</span>
      </div>
      <div
        className='amenities-icons'>
        <FontAwesomeIcon icon={faSwimmer} /> 
        <span>{t('piscina')}</span>
      </div>
      <div
        className='amenities-icons'>
        <FontAwesomeIcon icon={faUtensils} />
        <span>{t('cozinha')}</span>
      </div>
    </div>
  );
}