import './Header.scss'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../shared/context/Language.context";


export default function Header(){

    const {t, changeLanguaje} = useContext(LanguageContext)
    console.log(t);

    return(
        <header className='header'>
            <div className='header__divVacio'>

            </div>
            <div className='header__language'>
                <Link to="/"><img className='header__language--img' src='/home.svg' alt='home'></img></Link>
                <img className='header__language--img' onClick={() => changeLanguaje("es")} src="/españa.png" alt="españa"></img>
                <img className='header__language--img' onClick={() => changeLanguaje("en")} src="/gran-bretaña.png" alt="gran-bretaña"></img>
            </div>
        </header>
    )
}