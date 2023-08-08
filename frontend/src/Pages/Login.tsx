import React from "react";
import Button from "../components/Button";

type LoginState = {
  isButtonDisabled: boolean;
  user: string;
  password: string;
}

class Login extends React.Component {
  state: LoginState = {
    isButtonDisabled: true,
    user: '',
    password: '',
  } // no course foi atualizado para esta forma mais simplificada sem uso do construtor, muito útil caso este componente não precise receber props

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value }, () => this.inputValidation());
  }

  inputValidation = () => {
    const { user, password } = this.state;

    const isButtonDisabled = user.length > 3 && password.length > 7 ? false : true;
    this.setState({ isButtonDisabled });
  }
  render(): React.ReactNode {
      const { isButtonDisabled, user, password } = this.state;

      return (
        <section className="form">
          <h1>Bem vindo!!!</h1>
          <h3>Faça seu login ou crie seu usuário</h3>
          <label>
            <p>Usuário</p>
            <input type="text" name="user" value={user} onChange={this.handleInputChange} />
          </label>
          <label>
            <p>Senha</p>
            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          </label>
          <div className="container-login-buttons">
          <Button buttonText="Entrar" toPath="/config" disabled={isButtonDisabled} />
          <Button buttonText="Criar" toPath="/create-user" disabled={false} />
          </div>
        </section>
      )
  }
}

export default Login;