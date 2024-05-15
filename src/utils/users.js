/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import { deleteUser, loginUser, logoutUser, registerUser } from "../services/analytics";
import { armazenarLS } from "./functions";


const userFunctions = () => {

    const navigate = useNavigate()

    const registerSubmit = async (data) => {
        try {
            console.log(data)
            await registerUser(data)
            navigate('/login')
        } catch (error) {
            alert('Erro ao registrar usuário')
        }
    }

    const excluir = async (id) => {
        try {
            console.log(id)
            await deleteUser(id)
            window.location.reload()
        } catch (error) {
            alert('Erro ao deletar usuário')
        }
    }
    
    const login = async (user) => {
        try {
            console.log(user)
            const usuario = { email: user.email, password: user.password }
            const response = await loginUser(usuario)
            const token = response.data.token
            armazenarLS('token', token)
            armazenarLS('user', user.email)
            navigate('/perfil')
        } catch (error) {
            alert('erro ao logar')
        }
    }

    const logout = async (token) => {
        try {
            await logoutUser(token)
        } catch (error) {
            console.log('erro ao dar logout')
        }
    }

    return {
        registerSubmit, login, logout, excluir
    };
}
 
export default userFunctions;

