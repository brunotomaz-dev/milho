import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../api/requests";
import validations from "../validations/validations";

const Login: React.FC = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    inputValidation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const inputValidation = () => {
    const isPasswordValid = validations.validatePassword(password);
    const isEmailValid = validations.validateEmail(email);
    const isButtonDisabled = !(isPasswordValid && isEmailValid);
    
    setButtonDisabled(isButtonDisabled);
    setMessage('');
  }

  const errorHandleAxios = (error: AxiosError) => {
    const obj = error.response?.data as object;
    const message = Object.values(obj)[1] as string;

    setMessage(message);
    setButtonDisabled(true);
  }

  const loginButton = async () => {
    try {
      const response = await requestLogin(email, password);
      const { token } = response;

      console.log(token);
      navigate('/config');
    } catch (error) {
      axios.isAxiosError(error) ? errorHandleAxios(error) : console.log(error);
    }
  }

  return (
    <section className="form">
        <h1>Bem vindo!!!</h1>
        <h3>Faça seu login ou crie seu usuário</h3>
        <label>
          <p>Email</p>
          <input 
          type="text"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)} />
        </label>
        <label>
          <p>Senha</p>
          <input
          type="password"
          name="password"
          placeholder="Possui 8 letras ou números"
          value={password} 
          onChange={({ target: { value } }) => setPassword(value)} />
        </label>
        <div className="container-login-buttons">
          <button 
          type="button" 
          onClick={loginButton} 
          disabled={ isButtonDisabled }>Entrar
          </button>
          <button 
          type="button" 
          onClick={() => navigate('/create-user')} >Criar
          </button>
        </div>
        {message && <p>{message}</p>}
      </section>
  )
}

export default Login;