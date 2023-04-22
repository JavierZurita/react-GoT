import './Header.scss'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../shared/context/Language.context";


export default function Header({data}){

    const {t, changeLanguaje} = useContext(LanguageContext);

    const handleBackClick = () => {
        if (window.location.pathname.startsWith('/character/')) {
            window.location.href = '/character';
        } else if (window.location.pathname.startsWith('/house/')) {
            window.location.href = '/house';
        } 
    }
    const handleInputChange = (e) => {
        data.setSearchValue(e.target.value);
    };
    return(
        <header className='header'>
            <div className='header__divVacio'>
                { (window.location.pathname === "/house" || window.location.pathname === "/character") && <input placeholder={t('search')} onChange={handleInputChange} type="text" />}
                { (window.location.pathname.startsWith('/character/') || window.location.pathname.startsWith('/house/')) && <div className='volver' onClick={handleBackClick}>{t('back')}</div>}
            </div>
            <div className='header__language'>
                <Link to="/"><img className='header__language--img' src='/home.svg' alt='home'></img></Link>
                <img className='header__language--img' onClick={() => changeLanguaje("es")} src="/españa.png" alt="españa"></img>
                <img className='header__language--img' onClick={() => changeLanguaje("en")} src="/gran-bretaña.png" alt="gran-bretaña"></img>
            </div>
        </header>
    )
}