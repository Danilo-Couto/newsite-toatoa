import { Link } from 'react-router-dom';
import logo from '../../public/pousada/toatoa-logo.png'
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
            <img src={logo} alt="Logo Pousada Toa Toa Praia da Pipa" />
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
            <img src="/WhatsApp_icon.png" alt="WhatsApp Logo" />
          </Link>
          <Link 
            to="/" 
            className="instagram-icon"
            onClick={() => {
              window.open('https://www.instagram.com/pousada_toatoa_pipa/', '_blank');
            } }
          >
            <img src="/instagram.png" alt="Instagram Logo" />
          </Link>
        </div>
      </div>

    </>
  );
}
