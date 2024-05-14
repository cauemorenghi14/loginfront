/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser, registerUser } from "../services/analytics";
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
    
    const login = async (user) => {
        try {
            const usuario = { email: user.email, password: user.password }
            const response = await loginUser(usuario)
            const token = response.data.token
            armazenarLS('token', token)
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
        registerSubmit, login, logout
    };
}
 
export default userFunctions;

