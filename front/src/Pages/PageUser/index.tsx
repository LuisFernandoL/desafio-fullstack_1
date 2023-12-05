import { useContext } from "react"
import { ContactConext } from "../../Providers/User/ContactsContext"
// import { useLocation } from "react-router-dom"
import { PageUserContactCard } from "./PageUserContactsCard"
import { ModalNewPost } from "./ModalNewContact"
import { Header } from "./HeaderPageUser"
import { Footer } from "../../Components/Footer"
import { Container } from "../../Styles/global"
import { StylePageUser } from "./syle"

export const PageUser = () => {
    const { contacts, setCreateOpen, createOpen } = useContext(ContactConext)
    return (
        <>
            <Header />
            <StylePageUser>
                <Container className="divContainerPageUser">
                    <div className="divBack">
                        <span>
                            <h1>Seus contatos</h1>
                            <button onClick={() => setCreateOpen(true)}>Novo Contato</button>
                            {createOpen ? <ModalNewPost /> : null}
                        </span>
                        <ul>
                            {contacts.length == 0 ? <h2>Sem contatos cadastrados</h2> : contacts && contacts.map((contact) => (
                                <PageUserContactCard key={contact.id} contact={contact} />
                            ))}
                        </ul>
                    </div>
                </Container>
            </StylePageUser>
            <Footer />
        </>
    )
}