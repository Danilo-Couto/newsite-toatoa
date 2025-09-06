import { useTranslation } from "react-i18next"

export default function Localiacao() {
    const {t} = useTranslation();

    return (    
        <div className="location">
            <h2>{t('localizacao')}</h2>
            <h4>Rua Praia do Amor, 48, Praia da Pipa, Tibau do Sul, RN</h4>
            <iframe 
                id="como-chegar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2427446033284!2d-35.04572052500942!3d-6.231696693756486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28fb676dba819%3A0xa2acc91d07df4801!2sPOUSADA%20TOA%20TOA%20EM%20PIPA!5e0!3m2!1spt-BR!2sbr!4v1757171413209!5m2!1spt-BR!2sbr"
                width="600" 
                loading="lazy" allowFullScreen
                style={{ border: 0, width: '1600px', height:'600px'}}
                >
            </iframe>
        </div>    
    )
}


