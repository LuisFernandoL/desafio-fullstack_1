import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { PageUser } from "../Pages/PageUser"
import { PageEditContact } from "../Pages/PageUser/PageEditContact"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Register />}></Route>
            <Route path="/pageuser" element={<PageUser />}></Route>
            <Route path="/editContact" element={<PageEditContact />}></Route>
        </Routes>
    )
}