import { useContext } from "react"
import { IContact } from "../../../Providers/User/@types"
import { ContactConext } from "../../../Providers/User/ContactsContext"
import { StyleCard } from "./style"
import { Container } from "../../../Styles/global"

interface PageUserContactCardProps {
    contact: IContact
}

export const PageUserContactCard = ({ contact }: PageUserContactCardProps) => {
    const { deleteContact, pageEdit } = useContext(ContactConext)


    return (
        <>
            <Container  >
                <StyleCard >
                    <li key={contact.id} >
                        {/* <div className="divContainerLi"> */}
                        <div>
                            <h3>{contact.fullName}</h3>
                            <h3>{contact.email}</h3>
                            <h3>{contact.phone}</h3>
                        </div>
                        <div className="divLi">
                            <button onClick={() => pageEdit(contact)}>Editar</button>
                            <button onClick={() => deleteContact(contact.id)}>deletar</button>
                        </div>
                        {/* </div> */}
                    </li>
                </StyleCard>
            </Container>
        </>
    )

}