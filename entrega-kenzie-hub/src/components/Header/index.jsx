import { StyledHeader } from "./styles"
import logo from "../../img/Logo.svg"
import { Link } from "react-router-dom";


export const Header = ({ to, name, onClick}) =>{

    return(
        <StyledHeader>
            <nav className="container">
                <figure>
                    <img src={logo} alt="Logo" />
                </figure>
                <Link to={to} onClick={onClick}>{name}</Link>
            </nav>
        </StyledHeader>
    )
}

