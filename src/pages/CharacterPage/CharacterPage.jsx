import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";
import "./CharacterPage.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function CharacterPage(){

    const [characters, setCharacters] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3000/characters").then(res => {
            setCharacters(res.data);
        })
    },[])

    const handleChange = (e) => {
        const charCopy = [];
        let info = [];
        axios.get("http://localhost:3000/characters").then(res => {
            info = res.data;
            for (const char of info) {
                if(char.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    charCopy.push(char);
                }
            }
            setCharacters(charCopy);
        })
        console.log(e.target.value);
        console.log(characters);
    }

    return(
        <div className="charpage">
            <Header />
            <input type="text" onChange={(e) => handleChange(e)}/>
            <Gallery type="character" data={characters}></Gallery>
            <Footer />
        </div>
    )
}