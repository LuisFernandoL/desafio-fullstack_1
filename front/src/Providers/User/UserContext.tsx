import { createContext, useContext, useEffect, useState } from "react";
import { IUser, IUserContext, IUserLoginResponse, IUserProviderProps, IUserRegisterResponse } from "./@types";
import { api } from "../../Services/api";
import { TLoginForm } from "../../Pages/Login/loginSchemaRegister";
import { toast } from "react-toastify";
import { TRegisterForm } from "../../Pages/Register/registerFormSchema";
import { useNavigate } from "react-router-dom";
import { ContactConext } from "./ContactsContext";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [userLogged, setUserLogged] = useState<IUser | null>(null);
    const navigate = useNavigate()
    const { contacts, setContacts } = useContext(ContactConext)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const loadUser = async () => {
                try {
                    const { data } = await api.get(`/users/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setUserLogged(data);
                    setContacts(data.contacts)
                    navigate("/pageuser")
                } catch (error) { }
            };
            loadUser();
        }
    }, [])

    const access = () => {
        userLogged ? navigate("/pageuser") : navigate("/")
    }

    const userRegister = async (formData: TRegisterForm) => {
        try {
            const { data } = await api.post<IUserRegisterResponse>("/users", formData)
            toast.success("Cadastro realizado com sucesso")
            console.log(data)
            navigate("/")
        } catch (error) {
            toast.error("Ops! algo deu errado")
        }
    }


    const userLogin = async (formData: TLoginForm) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("/login", formData);
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", String(data.id))
            const userData = await api.get(`/users/profile`, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            });
            setUserLogged(userData.data);
            setContacts(userData.data.contacts),
                toast.success("Login feito com sucesso!")
            navigate("/pageuser")
        } catch (error) {
            toast.error("Oops! Erro ao fazer login")
        }

    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("USERID")
        setUserLogged(null)
        navigate("/")
    }
    return (
        <UserContext.Provider value={{ userLogged, userLogin, userRegister, userLogout, access, contacts }}>
            {children}
        </UserContext.Provider>
    )

}
