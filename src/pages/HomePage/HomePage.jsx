import './HomePage.scss'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


export default function HomePage(){

    return(
        <div className='divPadre' style={{backgroundImage: "url(/background.png)"}}>
            <Header></Header>
            <h1 className='divPadre__titulo'>GAME OF THRONES</h1>
            <Footer></Footer>
        </div>
    )
}