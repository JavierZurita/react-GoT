import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";

export default function CharacterPage(){

    const [characters, setCharacters] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3000/characters").then(res => {
            setCharacters(res.data);
        })
    },[])

    return(
        <div>
            <h2>PERSONAJES</h2>
            <Gallery data={characters}></Gallery>
        </div>
    )
}