import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './styles.css';
import api from '../../services/api';

export default function Home() {
  const [userAuthorities, setUserAuthorities] = useState([]);
  const login = localStorage.getItem('login');
  const accessToken = localStorage.getItem('accessToken');
  const id = localStorage.getItem('id');
  const nome = localStorage.getItem('nome');
  const navigate = useNavigate();
  const hasManagerRole = userAuthorities.includes('ROLE_MANAGER');
  const [dados, setDados] = useState(null);
  
  useEffect(() => {
    if (accessToken) {
     const headers = {
            'accept': '*',
            'Authorization':accessToken,
            'Content-Type': 'application/json',
        };

        api.get('projetos/getList', { headers })
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    } else {
        console.error('Token não encontrado no localStorage');
    }
}, []);

  const handleVoltar = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div>
{dados && (
        <div>
          <h1>Dados da API:</h1>
          <pre>{JSON.stringify(dados, null, 2)}</pre>
        </div>
      )}

    </div>
  );
}