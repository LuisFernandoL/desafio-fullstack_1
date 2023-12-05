import { SubmitHandler, useForm } from "react-hook-form"
import { TRegisterForm, registerFormSchema } from "./registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../Providers/User/UserContext"
import { Input } from "../../Components/Input"
import { Footer } from "../../Components/Footer"
import { Header } from "./HeaderRegister"
import { RegisterStyle } from "./style"
import { Container } from "../../Styles/global"

export const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<TRegisterForm>({ resolver: zodResolver(registerFormSchema) })
    const { userRegister } = useContext(UserContext)

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        userRegister(formData)
    }

    return (
        <>
            <Header />
            <RegisterStyle>
                <Container>
                    <div className="divContainerRegister">
                        <form onSubmit={handleSubmit(submit)}>

                            <div className="divText">
                                <h1>Cadastre um usuario</h1>
                                <h2> Preencha os campos corretamente para fazer seu registro</h2>
                            </div>

                            <div className="divInput">
                                <Input type="text"
                                    placeholder="Nome completo"
                                    error={errors.fullName}
                                    {...register("fullName")}
                                />
                                <Input type="email"
                                    placeholder="E-mail"
                                    error={errors.email}
                                    {...register("email")}
                                />
                                <Input type="phone"
                                    placeholder="Telefone"
                                    error={errors.phone}
                                    {...register("phone")}
                                />
                                <Input type="password"
                                    placeholder="Senha"
                                    error={errors.password}
                                    {...register("password")}
                                />
                                <Input type="password"
                                    placeholder="Confirmar senha"
                                    error={errors.confirmPassword}
                                    {...register("confirmPassword")}
                                />
                            </div>
                            <span>
                                <button type="submit">
                                    Cadastrar-se
                                </button>
                            </span>

                        </form>

                    </div>
                </Container>
            </RegisterStyle>
            <Footer />
        </>
    )

}



