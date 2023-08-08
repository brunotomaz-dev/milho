import React from "react";
import Button from "../components/Button";
import { ILoginState } from "../interface/StateTypes";
import validations from "../validations/validations";

class Login extends React.Component {
  state: ILoginState = {
    isButtonDisabled: true,
    email: '',
    password: '',
  } // no course foi atualizado para esta forma mais simplificada sem uso do construtor, muito útil caso este componente não precise receber props

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value }, () => this.inputValidation());
  }

  inputValidation = () => {
    const { email, password } = this.state;
    const isPasswordValid = validations.validatePassword(password);
    const isEmailValid = validations.validateEmail(email);
    const isButtonDisabled = !(isPasswordValid && isEmailValid);
    
    this.setState({ isButtonDisabled });
  }
  render(): React.ReactNode {
    const { isButtonDisabled, email, password } = this.state;

    return (
      <section className="form">
        <h1>Bem vindo!!!</h1>
        <h3>Faça seu login ou crie seu usuário</h3>
        <label>
          <p>Email</p>
          <input type="text" name="email" value={email} onChange={this.handleInputChange} />
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