import { Link } from "react-router-dom"
import "./Card.scss"

export default function Card({data, type}){

    return(
        <div>
            {type==="character" ? <Link to={"/character/"+data.id}>
            <img src={"http://localhost:3000/"+data.image} alt={data.name}></img>
            </Link> : type==="house" && <Link to={"/house/"+data.id}>
            <img src={"http://localhost:3000/"+data.image} alt={data.name}></img>
            </Link>}
        </div>
    )
}