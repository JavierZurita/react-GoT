import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function HousePage(){

    const [houses, setHouses] = useState("");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const filteredHouses = [];
        let houseCopy = [];
        axios.get("http://localhost:3000/houses").then(res => {
            houseCopy = res.data;
            setHouses(res.data);
            for( const house of houseCopy){
                if(house.name.toLowerCase().includes(searchValue.toLowerCase())){
                    filteredHouses.push(house);
                }
            }
            setHouses(filteredHouses)
        })
    },[searchValue])

    return(
        <div>
            <Header data={{searchValue,setSearchValue}}/>
            <Gallery type="house" data={houses}></Gallery>
            <Footer />
        </div>
    )
}