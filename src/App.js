import { useNavigate } from 'react-router-dom';
import './App.css';
import { Form } from './hooks/useform';

function App() {

  const navigate = useNavigate()

  const { register, registerSubmit, handleSubmit, errors } = Form()

  return (
    <div className="App">
      <form onSubmit={handleSubmit(registerSubmit)}>
        <label>Digite um nome de usuário</label>
        <input type="text" {...register('username', { required: true })}/>
        {errors.username && <span>{errors.username.message}</span>}

        <label>Digite um email</label>
        <input type="text" {...register('email')}/>
        {errors.email && <span>{errors.email.message}</span>}

        <label>Escolha uma senha</label>
        <input type="text" {...register('password')}/>
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Registrar</button>
      </form>
      <span style={{ color: 'gray', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/login')}>Ir para login</span>
    </div>
  );
}

export default App;
