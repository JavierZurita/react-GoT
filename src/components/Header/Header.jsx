import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../shared/context/Language.context";


export default function Header(){

    const {t, changeLanguaje} = useContext(LanguageContext)
    console.log(t);

    return(
        <header>
            <Link to="/">{t('home')}</Link>
            <div>
                <img onClick={() => changeLanguaje("es")} src="/españa.png" alt="españa"></img>
                <img onClick={() => changeLanguaje("en")} src="/gran-bretaña.png" alt="gran-bretaña"></img>
                {/* <span onClick={() => changeLanguaje("es")}>Español</span>
                <span onClick={() => changeLanguaje("en")}>Ingles</span> */}
            </div>
        </header>
    )
}