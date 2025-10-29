import { useTranslation } from "react-i18next";

export default function BotaoReservar() {  
  const { t } = useTranslation();

  return (
    <div className="navlink-wrapper">
      <a
        href='https://wa.me/558481096734?text=olá, vim pelo site.'
        target="_blank"
        rel="noopener noreferrer"
        className="room-button"
        aria-label={t('reservar')}
      >
        {t('reservar')}
      </a>
    </div>
  );
}
