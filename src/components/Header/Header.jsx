import './Header.scss'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../shared/context/Language.context";


export default function Header({onSearch}){

    const {t, changeLanguaje} = useContext(LanguageContext);
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
      console.log(event.target.value);
    };

    const handleBackClick = () => {
        if (window.location.pathname.startsWith('/character/')) {
            window.location.href = '/character';
        } else if (window.location.pathname.startsWith('/house/')) {
            window.location.href = '/house';
        } 
    }

    return(
        <header className='header'>
            <div className='header__divVacio'>
                { (window.location.pathname === "/house" || window.location.pathname === "/character") && <input value={searchValue}
                    onChange={handleInputChange} type="text"/>}
                { (window.location.pathname.startsWith('/character/') || window.location.pathname.startsWith('/house/')) && <div onClick={handleBackClick}>{t('back')}</div>}
            </div>
            <div className='header__language'>
                <Link to="/"><img className='header__language--img' src='/home.svg' alt='home'></img></Link>
                <img className='header__language--img' onClick={() => changeLanguaje("es")} src="/españa.png" alt="españa"></img>
                <img className='header__language--img' onClick={() => changeLanguaje("en")} src="/gran-bretaña.png" alt="gran-bretaña"></img>
            </div>
        </header>
    )
}