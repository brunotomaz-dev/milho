import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validations from '../validations/validations';

const CreateUser: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    inputValidation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, email, password, passwordConfirmation]);

  const inputValidation = () => {
    const isUserValid = validations.validateAll(user, email, password);
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

  return (
    <section className='form flex-center-column'>
      <h1>Criar usuário</h1>
      <label htmlFor='user'>
        <p>Usuário</p>
        <input
          type='text'
          name='user'
          value={user}
          onChange={({ target: { value } }) => setUser(value)}
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
      <div>
        <button
          type='button'
          disabled={isButtonDisabled}
          onClick={() => navigate('/config')}
        >
          Criar
        </button>
      </div>
    </section>
  );
};

export default CreateUser;
