import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";
import "./CharacterPage.scss"
export default function CharacterPage(){

    const [characters, setCharacters] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3000/characters").then(res => {
            setCharacters(res.data);
        })
    },[])

    return(
        <div className="charpage">
            <Gallery type="character" data={characters}></Gallery>
        </div>
    )
}