import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function HousePage(){

    const [houses, setHouses] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/houses").then(res => {
            setHouses(res.data);
        })
    },[])

    return(
        <div>
            <Header />
            <Gallery type="house" data={houses}></Gallery>
            <Footer />
        </div>
    )
}