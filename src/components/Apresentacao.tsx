import { useTranslation } from "react-i18next";

export default function Apresentacao() {
  const { t } = useTranslation();
  
  return (
    <div className="presentation">
      <h2>
      {t('bemVindo')}
      </h2>
      <span>        
      {t('apresentacao')}
      </span>
    </div>
  );
}