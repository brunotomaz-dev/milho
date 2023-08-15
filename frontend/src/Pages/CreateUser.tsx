import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData, requestLogin, setToken } from '../api/requests';
import * as axiosError from "../helpers/axiosErrorHandle";
import validations from '../validations/validations';

const CreateUser: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    inputValidation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, password, passwordConfirmation]);

  const inputValidation = () => {
    const isUserValid = validations.validateAll(name, email, password);
    const isButtonDisabled = !(isUserValid && passwordConfirmation);
    setIsButtonDisabled(isButtonDisabled);
  };

  const handlePasswordConfirmation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const passwordConfirmation = value === password;
    setPasswordConfirmation(passwordConfirmation);
  };

  const handleCreateUser = async () => {
    try {
      const { token } = await requestLogin('/auth/new', { name, email, password });
      setToken(token);

      const { role } = await requestData('/auth/validate');
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);

      navigate('/config');

    } catch (error) {
      axios.isAxiosError(error) ? setMessage(axiosError.axiosErrorMessage(error)) : console.log(error);
      setIsButtonDisabled(true);
    }
  };

  return (
    <section className='form'>
      <h1>Criar usuário</h1>
      <label htmlFor='user'>
        <p>Nome</p>
        <input
          type='text'
          name='user'
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
      <label htmlFor='email'>
        <p>Email</p>
        <input
          type='email'
          name='email'
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <label>
        <p>Senha</p>
        <input
          type='password'
          value={password}
          name='password'
          placeholder='8 letras ou números'
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <label>
        <p>Confirmar senha</p>
        <input type='password' onChange={handlePasswordConfirmation} />
      </label>
      <button
          type='button'
          disabled={isButtonDisabled}
          onClick={handleCreateUser}
      >
      Criar
      </button>
      <div className='containter-flex-column'>{message && <p className='erro-alert'>{message}</p>}</div>
    </section>
  );
};

export default CreateUser;
