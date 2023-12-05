import { zodResolver } from "@hookform/resolvers/zod";
import { INewContact } from "../../../../Providers/User/@types";
import { ContactConext } from "../../../../Providers/User/ContactsContext";
import { useContext } from "react"
import { SchemaFormModal } from "./SchemaFormModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputEdit } from "./InputModal/InputEdit";


export const FormModalCreateContact = () => {
    const { createContact } = useContext(ContactConext);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<INewContact>({
        resolver: zodResolver(SchemaFormModal),
    })
    const submit: SubmitHandler<INewContact> = (formData) => {
        createContact(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <InputEdit
                type="text"
                placeholder="Nome completo"
                error={errors.fullName?.message}
                {...register("fullName")}
            />
            <InputEdit
                type="email"
                placeholder="E-mail"
                error={errors.email?.message}
                {...register("email")}
            />
            <InputEdit
                type="text"
                placeholder="Telefone"
                error={errors.phone?.message}
                {...register("phone")}
            />
            <span>
                <button type="submit">Criar</button>
            </span>

        </form>

    )
}