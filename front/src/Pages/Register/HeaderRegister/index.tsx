import { Container } from "../../../Styles/global";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { StyleHeader, StyleLink } from "./style";




export const Header = () => {

    return (
        <StyleHeader>
            <Container>
                <Link to="/"><FaPhoneSquareAlt size={40} />
                </Link>
                <span>
                    <StyleLink to="/">Login</StyleLink>
                </span>
            </Container>
        </StyleHeader>
    )

}