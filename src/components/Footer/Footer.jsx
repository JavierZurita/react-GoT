import './Footer.scss'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer(){
    
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <Link className="footer__link" to="/character">{t('characters')}</Link>
            <Link className="footer__link" to="/house">{t('houses')}</Link>
            <Link className="footer__link" to="/chronology">{t('chronology')}</Link>
        </footer>
    )
}