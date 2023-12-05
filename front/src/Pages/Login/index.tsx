import { SubmitHandler, useForm } from "react-hook-form"
import { TLoginForm, loginFormSchema } from "./loginSchemaRegister"
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../Providers/User/UserContext";
import { useContext } from "react";
import { Input } from "../../Components/Input";
import { Container } from "../../Styles/global";
import { LoginStyle, StyleLinkLogin } from "./style";
import { Header } from "./HeaderLogin";
import { Footer } from "../../Components/Footer";

export const Login = () => {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm<TLoginForm>({
        resolver: zodResolver(loginFormSchema),
    })

    const { userLogin } = useContext(UserContext);

    const submit: SubmitHandler<TLoginForm> = (formData) => {
        userLogin(formData)
    }
    return (
        <>
            <Header />
            <LoginStyle>
                <Container className="divContainerLogin">
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="divText">
                            <h2>Faça seu login</h2>
                        </div>
                        <div className="divInput">
                            <Input
                                type="email"
                                placeholder="E-mail"
                                error={errors.email}
                                {...register("email")}
                            />
                            <Input
                                type="password"
                                placeholder="Senha"
                                error={errors.password}
                                {...register("password")}
                            />
                            <span>
                                <button type="submit">Entrar</button>
                                <StyleLinkLogin to="/users">Cadastrar</StyleLinkLogin>
                            </span>
                        </div>
                    </form>
                </Container>
            </LoginStyle>
            <Footer/>
        </>

    )



}