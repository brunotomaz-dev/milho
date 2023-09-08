import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData, requestLogin, setToken } from '../api/requests';
import * as axiosError from '../helpers/axiosErrorHandle';
import { useAppDispatch } from '../redux/hook/hooks';
import { addUser } from '../redux/reducers/gameSlice';
import validations from '../validations/validations';

const Login: React.FC = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const inputValidation = useCallback(() => {
    const isPasswordValid = validations.validatePassword(password);
    const isEmailValid = validations.validateEmail(email);
    const isButtonDisabled = !(isPasswordValid && isEmailValid);

    setButtonDisabled(isButtonDisabled);
    setMessage('');
  }, [email, password]);

  useEffect(() => {
    inputValidation();
  }, [inputValidation]);

  const loginButton = async () => {
    try {
      const response = await requestLogin('/auth', { email, password });
      const { token } = response;

      setToken(token);

      const { role, name } = await requestData('/auth/validate');

      dispatch(addUser({ name, role }));
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);

      navigate('/config');
    } catch (error) {
      axios.isAxiosError(error)
        ? setMessage(axiosError.axiosErrorMessage(error))
        : console.log(error);
      setButtonDisabled(true);
    }
  };

  return (
    <main className='main-container'>
      <section className='form'>
        <h1>Bem vindo!!!</h1>
        <h3>Faça seu login ou crie seu usuário</h3>
        <label>
          <p>Email</p>
          <input
            type='text'
            name='email'
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          <p>Senha</p>
          <input
            type='password'
            name='password'
            placeholder='Possui 8 letras ou números'
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        <nav className='container-flex-row'>
          <button
            type='button'
            onClick={loginButton}
            disabled={isButtonDisabled}
          >
            Entrar
          </button>
          <button type='button' onClick={() => navigate('/create-user')}>
            Criar
          </button>
        </nav>
        <div className='container-flex-column'>
          {message && <p className='erro-alert'>{message}</p>}
        </div>
      </section>
    </main>
  );
};

export default Login;
