import { Link } from "react-router-dom";

export default function Footer(){

    return (
        <footer className="footer">
            <nav>
                {/* <Link to="/">Home</Link> */}
                <Link to="/character">Character</Link>
                <Link to="/house">House</Link>
                <Link to="/chronology">Chronology</Link>
            </nav>
        </footer>
    )
}