import { Link } from 'react-router-dom';
import logo from '../../public/toatoa-logo.webp'
import i18n from '../services/i18next';
import ReactCountryFlag from 'react-country-flag';
import { useLocaleContext } from '../services/LocaleContext';

export default function Header() {

  const { setLocale } = useLocaleContext();

  function changeLanguage(idiom: string) {
    i18n.changeLanguage(idiom);
    setLocale(idiom);
  }
    
  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img loading='lazy' src={logo} alt="Logo Pousada Toa Toa Praia da Pipa" />
          </Link>
        </div>
        <div>
          <div className="idioms">
            <ReactCountryFlag
              countryCode="BR"
              className="flag"
              style={{ fontSize: '2em' }}
              onClick={() => { changeLanguage('pt'); } } />
            <ReactCountryFlag
              countryCode="US"
              className="flag"
              style={{ fontSize: '2em' }}
              onClick={() => { changeLanguage('en'); } } />
            <ReactCountryFlag
              countryCode="ES"
              className="flag"
              style={{ fontSize: '2em' }}
              onClick={() => { changeLanguage('es'); } } />
            <ReactCountryFlag
              countryCode="FR"
              className="flag"
              style={{ fontSize: '2em' }}
              onClick={() => { changeLanguage('fr'); } } />
            <ReactCountryFlag
              countryCode="DE"
              className="flag"
              style={{ fontSize: '2em' }}
              onClick={() => { changeLanguage('gr'); } } />
          </div>
        </div>
        <div>
          <Link 
            to="/" 
            className="whatsapp-icon-header"
            onClick={() => {
              window.open('https://wa.me/558481096734?text="olá, vim pelo site."', '_blank');
            } }>
            <img loading='lazy' src="/WhatsAp.webp" alt="WhatsApp Logo" />
          </Link>
          <a 
            href="https://www.instagram.com/pousada_toatoa_pipa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <img loading="lazy" decoding="async" src="instagram.webp" alt="Instagram Logo" />
          </a>
        </div>
      </div>

    </>
  );
}
