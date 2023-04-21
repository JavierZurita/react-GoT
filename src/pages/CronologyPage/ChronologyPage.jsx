import axios from "axios";
import { useEffect, useState } from "react";
import "./ChronologyPage.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function ChronologyPage(){
   
    const [characters, setCharacters] = useState();
    let [sortMinToMax, setSortMinToMax] = useState(true);
    useEffect(()=>{
        axios.get("http://localhost:3000/characters").then(res => {
            const sortedCharacters = sortByNumber(res.data);
            setCharacters(sortedCharacters);
        })
    },[])
    
    const sortByNumber = (array) => {
        if(sortMinToMax){
            array.sort((a, b) => a.age - b.age);
            setSortMinToMax(false);
        }else{
            array.sort((a, b) => b.age - a.age);
            setSortMinToMax(true);
        }
        console.log(array);
        return array;
    }

    return(
        <div>
            <Header />
           {characters && <div className="sort" onClick={() => {sortByNumber(characters)}}>{characters[0].age}</div>}
            {characters && characters.map((char,index) => 
                <div key={index}>
                    <p>{char.name}</p>
                    <p>{char.age}</p>
                    <img src={"http://localhost:3000/"+char.image} alt={char.name} />
                </div>
            )}
            <Footer />
        </div>
    )
}