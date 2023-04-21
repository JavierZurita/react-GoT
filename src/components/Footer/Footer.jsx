import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer(){
    
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <nav>
                {/* <Link to="/">Home</Link> */}
                <Link to="/character">{t('characters')}</Link>
                <Link to="/house">{t('houses')}</Link>
                <Link to="/chronology">{t('chronology')}</Link>
            </nav>
        </footer>
    )
}