import { Link } from "react-router-dom";
import './style.css'
export default function Topo() {
    return (
        <header>
            <div className="limita-secao">

                <figure>
                    <img src="./assets/logo.png" alt="logo da pagina" />
                </figure>

                <nav>
                    <Link className="color" to='/'>Home</Link>
                    <Link className="color" to='/Sabores'>Sabores</Link>
                    <Link className="color" to='/Sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}