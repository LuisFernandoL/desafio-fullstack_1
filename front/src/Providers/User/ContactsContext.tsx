import { createContext, useState } from "react";
import { IContact, IContactContext, INewContact, IUserProviderProps } from "./@types";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ContactConext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IUserProviderProps) => {
    const [newContact] = useState<INewContact | null>(null);
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [createOpen, setCreateOpen] = useState(false);
    const [editing, setEditing] = useState<IContact>({} as IContact)

    const navigate = useNavigate();

    const createContact = async (formData: INewContact) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const userId = localStorage.getItem("@USERID");
            const { data } = await api.post(`/contacts/${userId}/user`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContacts([...contacts, data])
            toast.success("Contato criado com sucesso")
        } catch (error) {
            toast.error("Ops! Algo deu errado ao criar contato")
        }
    }

    const pageEdit = (contact: IContact) => {
        setEditing(contact)
        navigate("/editContact")
    }

    const updateContact = async (formData: INewContact, contactId: number) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.patch(`/contacts/${contactId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const contactUpdate = contacts.filter((constact) => constact.id !== contactId)
            setContacts([...contactUpdate, data])
            navigate("/pageuser");
        } catch (error) {
            console.log(error)
        }
    }

    const deleteContact = async (contactId: number) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newList = contacts.filter((contact) => contact.id !== contactId)
            setContacts(newList)
        } catch (error) {

        }
    }




    return (
        <ContactConext.Provider value={{
            contacts,
            createContact,
            updateContact,
            deleteContact,
            newContact,
            createOpen,
            setCreateOpen,
            setContacts,
            editing,
            setEditing,
            pageEdit
        }}>
            {children}
        </ContactConext.Provider>
    )

}