import { useTranslation } from "react-i18next";

export default function BotaoReservar() {  
  const { t } = useTranslation();

  return (
    <div className="navlink-wrapper">
      <a
        href='https://hbook.hsystem.com.br/Booking?companyId=632b13f5e819f634133f8f8a&promocode=igdHnaPz'
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
