import React from "react";

class CreateUser extends React.Component {
  render(): React.ReactNode {
      return (
        <div>
          <section className="form flex-center-column">
            <h1>Criar usuário</h1>
            <label>
              <p>Usuário</p>
              <input type="text" />
            </label>
            <label>
              <p>Senha</p>
              <input type="password" placeholder="8 letras ou números" />
            </label>
            <label>
              <p>Confirmar senha</p>
              <input type="password" />
            </label>
            <div>
              <button>Criar</button>
            </div>
          </section>
        </div>
      )
  }
}

export default CreateUser;