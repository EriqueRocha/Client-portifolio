import React, {useState} from "react";
import './styles.css';
import {Link, useNavigate} from 'react-router-dom';

import api from '../../services/api';

export default function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function loginU(e){
      e.preventDefault();

      const data = {
        email,
        password,
      };

        try {
          const response = await api.post('public/login', data);

          localStorage.setItem('login', response.data.body.login);
          localStorage.setItem('accessToken', response.data.body.token);
          localStorage.setItem('id', response.data.body.id);
          localStorage.setItem('nome', response.data.body.nome);

          console.log(response);
          navigate('/')

        } catch (error) {
          alert('O login falhou, tente novamente');
        }

  };

return(
  <div className="login-container">
        <section className="form">

        <form onSubmit={loginU}>
                <h1>Acesse sua conta</h1>
                <input 
                  placeholder="Login"
                  value={email}
                  onChange={e => setEmail(e.target.value)}

                />
                <input type="password" 
                  placeholder="senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <button className="button" type="submit">Entrar</button><br />
                <Link className="btnHome" to="/">Página inicial</Link>
        </form>
       
        </section>
  </div>

)

}