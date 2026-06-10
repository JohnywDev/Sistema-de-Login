import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    console.log('Login feito com:', { email, password });
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="page-wrapper">
      {/* Barra do topo com a logo */}
      <header className="top-bar">
        <div className="logo">
          {/* 💡 COPIE ESSA LINHA EXATAMENTE ASSIM, COM OS NÚMEROS NO FINAL */}
          <img src="https://picsum.photos" alt="Logo da Empresa" />
        </div>
      </header>

      {/* Conteúdo do Login */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Entrar</h2>
          
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">Acessar</button>
          
          <p className="signup-link">
            Não tem uma conta? <a href="#criar">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  );
}