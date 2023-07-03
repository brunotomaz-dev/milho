import React from "react";

class Login extends React.Component {
  render(): React.ReactNode {
      return (
        <div>
          <h1>Bem vindo!!</h1>
          <h3>Faça seu login para entrar</h3>
          <label>
            <p>Usuário</p>
            <input type="text" />
          </label>
          <label>
            <p>Senha</p>
            <input type="password" />
          </label>
          <div>
          <button>Entrar</button>
          </div>
        </div>
      )
  }
}

export default Login;