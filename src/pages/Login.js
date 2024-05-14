import { useNavigate } from "react-router-dom";
import { Form } from "../hooks/useform";

const Login = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, login } = Form()

    return ( 
        <div>
            <form onSubmit={handleSubmit(login)}>
                <label>Digite o seu email</label>
                <input type="text" {...register('email')}/>

                <label>Digite a senha</label>
                <input type="text" {...register('password')}/>

                <button>Logar</button>
            </form>
            <span style={{ cursor: 'pointer', color: 'gray', fontWeight: 'bold' }} onClick={() => navigate('/register')}>Criar conta</span>
        </div>
     );
}
 
export default Login;