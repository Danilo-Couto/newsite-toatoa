import { useTranslation } from "react-i18next"

export default function Avaliacoes() {
  const { t } = useTranslation();

  return (
      <div>
        <h2>{t('avaliacao')}</h2>
        <div className="ratings">
          <h3>
            <a href="https://maps.app.goo.gl/Q4LVYX4aYqPdCz1b9" 
            target="_blank"
            rel="noopnener noreferrer"
            >
            Google
            </a>
          </h3>
          <h3>
            <a href="https://www.booking.com/hotel/br/hostel-praia-da-pipa.pt-br.html" 
            target="_blank"
            rel="noopnener noreferrer"
            >
            Booking
            </a>
          </h3>
          <h3>
            <a href="https://www.expedia.com.br/Tibau-Do-Sul-Hoteis-Pousada-Toa-Toa-Em-Pipa.h87702206.Hotel-Reservas" 
            target="_blank"
            rel="noopnener noreferrer"
            >
            Expedia
            </a>
          </h3>
        </div>
      </div>
    );
  }
  