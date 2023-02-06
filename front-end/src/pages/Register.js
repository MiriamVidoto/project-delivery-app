import { validate } from 'email-validator';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import postRegister from '../api/register';
import '../style/register.css';
import { setDataToLocalStorage } from '../utils/localStorage';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const navigate = useHistory();

  const register = () => {
    const numberTwelve = 12;
    const numberSix = 6;
    return (validate(email)
      && password.length >= numberSix
      && name.length >= numberTwelve);
  };

  const createRegister = async (newRegister) => {
    const created = 201;
    const newPostRegister = await postRegister(newRegister);
    if (newPostRegister === undefined) setInvalid(true);
    else if (newPostRegister.status === created) {
      setDataToLocalStorage('user', newPostRegister.data);
      return newPostRegister && navigate.push('/customer/products');
    }
  };

  return (
    <div className="register-inputs">
      <h1>Cadastre-se</h1>
      <label htmlFor="email">
        Nome
        <input
          data-testid="common_register__input-name"
          name="name"
          type="name"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="common_register__input-email"
          name="email"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_register__input-password"
          name="password"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ !register() }
        onClick={ () => createRegister({ name, email, password }) }
      >
        Cadastrar
      </button>
      {invalid && (
        <div data-testid="common_register__element-invalid_register">
          <p>Já existe um usuário com esse nome ou e-mail.</p>
        </div>
      )}
    </div>
  );
}
