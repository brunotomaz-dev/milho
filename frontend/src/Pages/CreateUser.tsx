import React from "react";
import Button from "../components/Button";
import { ICreateUserState } from "../interface/StateTypes";
import validations from "../validations/validations";

class CreateUser extends React.Component {
  state: ICreateUserState = {
    isButtonDisabled: true,
    user: '',
    password: '',
    email: '',
    passwordConfirmation: false,
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value }, () => this.inputValidation());
  }

  inputValidation = () => {
    const { email, password, user, passwordConfirmation } = this.state;
    const isUserValid = validations.validateAll(user, email, password);
    const isButtonDisabled = !(isUserValid && passwordConfirmation);

    this.setState({ isButtonDisabled });
  }

  handlePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { password } = this.state;
    const passwordConfirmation = value === password;
    console.log(value, password, passwordConfirmation);
    this.setState({ passwordConfirmation }, () => this.inputValidation());
  }
  
  render(): React.ReactNode {
    const { isButtonDisabled, user, password, email } = this.state;
    return (
        <section className="form flex-center-column">
          <h1>Criar usuário</h1>
          <label htmlFor="user">
            <p>Usuário</p>
            <input type="text" name='user' value={user} onChange={this.handleInputChange} />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" name='email' value={email} onChange={this.handleInputChange} />
          </label>
          <label>
            <p>Senha</p>
            <input type="password" value={password} name="password" placeholder="8 letras ou números" onChange={this.handleInputChange} />
          </label>
          <label>
            <p>Confirmar senha</p>
            <input type="password" onChange={this.handlePasswordConfirmation} />
          </label>
          <div>
            <Button buttonText="Criar" toPath="/config" disabled={isButtonDisabled} />
          </div>
        </section>
    )
  }
}

export default CreateUser;