import { useTranslation } from 'react-i18next';
import '../styles/General.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

export default function Header() {
  const {t} = useTranslation();
  return (
    <nav className="menu">
      <NavLink to="/suites"> {t('suites')} </NavLink>
      <NavLink to="#como-chegar">{t('howToArrive')}</NavLink>
      <NavLink to="/contato"> {t('contato')} </NavLink>
      <NavLink to="/rules"> {t('rules')} </NavLink>
    </nav>
  );
}
