import { Container } from "../../../Styles/global";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { StyleHeader } from "./style";
import { UserContext } from "../../../Providers/User/UserContext";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";



export const Header = () => {
    const { userLogout } = useContext(UserContext);


    return (
        <StyleHeader>
            <Container>
                <p ><FaPhoneSquareAlt size={40} />
                </p>
                <span>
                    <button ><FiLogOut onClick={() => userLogout()} size={28} /></button>
                </span>
            </Container>
        </StyleHeader>
    )

}