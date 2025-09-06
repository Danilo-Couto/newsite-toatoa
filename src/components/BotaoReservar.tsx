import { useTranslation } from "react-i18next";

export default function BotaoReservar() {  
  const { t } = useTranslation();

  return (
    <div 
    className="navlink-wrapper">
      <button 
        className="room-button"
            onClick={() => {
              window.open('https://wa.me/558481096734?text="olá, vim pelo site."', '_blank');
            } }>
        {t('reservar')}
      </button>
    </div>
  );
}
