import { useTranslation } from "react-i18next";

export default function Apresentacao() {
  const { t } = useTranslation();
  
  return (
    <div className="presentation">
      <h4>
      {t('bemVindo')}
      </h4>
      <span>        
      {t('apresentacao')}
      </span>
    </div>
  );
}