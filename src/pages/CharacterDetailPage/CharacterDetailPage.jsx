import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./CharacterDetailPage.scss"
import Header from "../../components/Header/Header";

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
            <Header></Header>
            <div className="page">
            {char.image && <img src={"http://localhost:3000/"+char.image} alt={char.name}></img>}
            <h2>{char.name}</h2>
            
            {char && (
                <div className="gallery--items">
                    <div className="char--info">
                        <h3>House</h3>
                        {house && <img src={"http://localhost:3000/"+house} alt="house"></img>}
                    </div>
                {Object.entries(char).map(([key, value]) => {
                    if (key !== "id"&& key !== "name" && key !== "age" && key !== "image" && key !=="house") {
                        return (
                        <div className="char--info" key={key}>
                            <h3 className="title">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                            <ul>
                            {value.map((item, index) => ( <li key={item}>{item}</li> ))}
                            </ul>
                        </div>
                        );
                    }
                    return null;
                    })}
                </div>
            )}
        </div>
        </div>
        
    )
}