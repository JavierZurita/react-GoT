import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";

export default function HousePage(){

    const [houses, setHouses] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/houses").then(res => {
            setHouses(res.data);
        })
    },[])

    return(
        <div>
            <Gallery type="house" data={houses}></Gallery>
        </div>
    )
}