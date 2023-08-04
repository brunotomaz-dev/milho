import React from "react";
import '../styles/login.css';

class Login extends React.Component {
  render(): React.ReactNode {
      return (
        <div className="form">
          <h1>Bem vindo!!!</h1>
          <h3>Faça seu login ou crie seu usuário</h3>
          <label>
            <p>Usuário</p>
            <input type="text" />
          </label>
          <label>
            <p>Senha</p>
            <input type="password" />
          </label>
          <div className="container-login-buttons">
          <button>Entrar</button>
          <button>Criar</button>
          </div>
        </div>
      )
  }
}

export default Login;