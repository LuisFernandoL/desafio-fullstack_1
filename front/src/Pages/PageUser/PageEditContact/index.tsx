import { useContext } from "react"
import { ContactConext } from "../../../Providers/User/ContactsContext"
import { IContact } from "../../../Providers/User/@types"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaFormModal } from "../ModalNewContact/FormModalCreate/SchemaFormModal"
import { SubmitHandler, useForm } from "react-hook-form"
import { Header } from "./HeaderPageUserEdit"
import { Container } from "../../../Styles/global"
import { StyleLink, StylePageEditContact } from "./style"
import { Footer } from "../../../Components/Footer"
import { InputEdit } from "./InputModalEdit/InputEdit"

export const PageEditContact = () => {
    const { updateContact, editing } = useContext(ContactConext)

    const {
        handleSubmit,
        register,
        formState: { errors }, } = useForm<IContact>({
            defaultValues: {
                fullName: editing?.fullName,
                email: editing?.email,
                phone: editing?.phone
            }, resolver: zodResolver(SchemaFormModal)
        })
    const submit: SubmitHandler<IContact> = (formData) => {
        updateContact(formData, editing.id);
    }
    return (
        <>
            <Header />
            <StylePageEditContact>
                <Container>
                    <div className="divPageEdit">
                        <h1>Editando:</h1>
                    </div>
                    <div className="divForm">
                        <form onSubmit={handleSubmit(submit)}>
                            <label>Nome completo</label>
                            <InputEdit
                                type="text"
                                error={errors.fullName?.message}
                                {...register("fullName")}
                            />

                            <label>Email</label>
                            <InputEdit
                                type="email"
                                error={errors.email?.message}
                                {...register("email")}
                            />

                            <label>Telefone</label>
                            <InputEdit
                                type="text"
                                error={errors.phone?.message}
                                {...register("phone")}
                            />
                            <div className="btnSave">
                                <button type="submit">Salvar contato</button>
                                <StyleLink to="/pageuser">Voltar</StyleLink>
                            </div>
                        </form>
                    </div>
                </Container>
            </StylePageEditContact>
            <Footer/>
        </>
    )
}