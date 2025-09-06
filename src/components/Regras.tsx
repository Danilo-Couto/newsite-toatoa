import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Regras() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage('es');
  }, [i18n]);

  return (
    <div className="rules">
      <span />
      <h1>{t('rules')}</h1>
      <span> 📞 WHATSAPP: +55 84 9 8109-6734</span>
      <span> ⏰ CHECK-IN: 14H</span>
      <span> ⏰ CHECK-OUT: 12H</span>
      <span>{t('paz')}</span>
      <span>{t('pool')}</span>
      <span>{t('som')}</span>
      <span>{t('kitchen')}</span>
      <span>{t('drinks')}</span>
      <span>{t('limpeza')}</span>
      <span>{t('lavanderia')}</span>
      <span>{t('fumar')}</span>
      <span>{t('desligar')}</span>
      <span>{t('maquiagem')}</span>
      <span> 🚐 TOURS: </span>  
      <img width={'200px'} src="qr.code.passeios.png" alt="Tours QR code" />
      <span>REVIEWS</span>
      <img width={'200px'} src="qrcode.googlereview.png" alt="Google reviews QR code" />
    </div>
  );
}
