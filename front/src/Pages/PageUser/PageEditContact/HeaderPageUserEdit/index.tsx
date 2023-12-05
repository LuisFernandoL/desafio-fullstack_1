import { FaPhoneSquareAlt } from "react-icons/fa";
import { StyleHeader, StyleLink } from "./style";
import { Container } from "../../../../Styles/global";




export const Header = () => {

    return (
        <StyleHeader>
            <Container>
                <p><FaPhoneSquareAlt size={40} />
                </p>
                <span>
                    <StyleLink to="/pageuser">Voltar</StyleLink>
                </span>
            </Container>
        </StyleHeader>
    )

}