import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CharacterDetailPage(){
    const {id} = useParams();
    const [char, setChar] = useState("");
    let houses=[];
    let pers = [];
    let [house,setHouse] = useState();
    useEffect(() => {

        axios.get(`http://localhost:3000/characters/${id}`).then(res => {
            setChar(res.data);
            pers = res.data;
            // console.log(res.data);
        })
        
        axios.get("http://localhost:3000/houses").then(res2 => {
            houses = res2.data;
            
            for(let i = 0; i < houses.length; i++){
                    if(houses[i].name === pers.house){
                        setHouse(houses[i].image);
                    }
            }
            })
         },[])

    return(
        <div>
            {char.image && <img src={"http://localhost:3000/"+char.image} alt={char.name}></img>}
            <h2>{char.name}</h2>
            {char.titles && char.titles.map((title, index) =>  <div key={title}> <p>{title}</p> </div>)}
            {house && <img src={"http://localhost:3000/"+house} alt="house"></img>}
        </div>
    )
}