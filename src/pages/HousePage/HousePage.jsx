import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function HousePage(){

    const [houses, setHouses] = useState("");
    const [filteredHouses, setFilteredHouses] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/houses").then(res => {
            setHouses(res.data);
            setFilteredHouses(res.data);
        })
    },[])

    const handleSearchInputChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        const filtered = houses.filter((house) => house.name.toLowerCase().includes(searchString)); 
        console.log(filtered);
    };
    return(
        <div>
            <Header onSearch={handleSearchInputChange}/>
            <Gallery type="house" data={filteredHouses}></Gallery>
            <Footer />
        </div>
    )
}