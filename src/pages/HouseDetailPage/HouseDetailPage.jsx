import './HouseDetailPage.scss'
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom/dist";
import Header from '../../components/Header/Header';

export default function HouseDetailPage(){
    const {id} = useParams();
    const [house, setHouse] = useState([]);

    

    
    useEffect(() => {
        axios.get(`http://localhost:3000/houses/${id}`).then(res => {
            setHouse(res.data);
            console.log(res.data);
        })
    }, [])

    return(
        <div>
            <Header></Header>
            <div className="page">
            {house && (
                <div>
                    <img src={"http://localhost:3000/" + house.image}></img>
                    <h2>{house.name}</h2>
                </div>
            )}
            <div className="gallery--items">
                {house && Object.entries(house).map(([key, value]) => {
                    if (key !== "id" && key !== "name" && key !== "image") {
                        return (
                            <div className="char--info" key={key}>
                                <h3 className="title">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <ul>
                                    {Array.isArray(value) ? value.map((item, index) => ( <li key={item}>{item}</li> )) : <li>{value}</li>}
                                </ul>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
        </div>
        
    )
}