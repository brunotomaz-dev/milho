import React from "react";
import Button from "../components/Button";
import { ILoginState } from "../interface/StateTypes";

class CreateUser extends React.Component {
  state: ILoginState = {
    isButtonDisabled: true,
    user: '',
    password: '',
  }
  
  render(): React.ReactNode {
    const { isButtonDisabled, user, password } = this.state;
    return (
        <section className="form flex-center-column">
          <h1>Criar usuário</h1>
          <label>
            <p>Usuário</p>
            <input type="text" value={user} />
          </label>
          <label>
            <p>Senha</p>
            <input type="password" value={password} placeholder="8 letras ou números" />
          </label>
          <label>
            <p>Confirmar senha</p>
            <input type="password" />
          </label>
          <div>
            <Button buttonText="Criar" toPath="/config" disabled={isButtonDisabled} />
          </div>
        </section>
    )
  }
}

export default CreateUser;