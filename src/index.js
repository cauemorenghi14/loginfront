import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/inicio';
import { UserContext } from './contexts/usercontext';
import Usuarios from './pages/Usuarios';
import { consultarLS } from './utils/functions';
import Perfil from './pages/Perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {

  const [token, settoken] = useState("");
  const [perfil, setperfil] = useState(`${consultarLS('perfil')}`);

  return (
    <UserContext.Provider value={{ token, settoken, perfil, setperfil }}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<App />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/usuarios' element={<Usuarios />}/>
            <Route path='/perfil' element={<Perfil />}/>
          </Routes>
        </BrowserRouter>   
      </React.StrictMode>
    </UserContext.Provider>
  )
}
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
