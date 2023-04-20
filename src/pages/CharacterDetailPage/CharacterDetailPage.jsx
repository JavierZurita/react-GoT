import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CharacterDetailPage(){
    const {id} = useParams();
    const [char, setChar] = useState("");
    useEffect(() => {
        console.log(`http://localhost:3000/characters/${id}`);
        axios.get(`http://localhost:3000/characters/${id}`).then(res => {
            setChar(res.data);
            console.log(res.data);
        })
    },[])
    return(
        <div>
            {char.image && <img src={"http://localhost:3000/"+char.image} alt={char.name}></img>}
            <h2>{char.name}</h2>
            <div>
                {char.titles && char.titles.map((title, index) => 
                    <div key={title}>
                        <p>{title}</p>
                    </div>
                )}
            </div>

        </div>
    )
}