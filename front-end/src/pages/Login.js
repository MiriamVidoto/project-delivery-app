import { validate } from 'email-validator';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import postLogin from '../api/login';
import { setDataToLocalStorage } from '../utils/localStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const history = useHistory();

  const login = () => {
    const numberSix = 6;
    return validate(email) && password.length >= numberSix;
  };

  const redirect = (role) => {
    if (role === 'customer') {
      history.push('/customer/products');
    }
    if (role === 'seller') {
      history.push('/seller/orders');
    }
    if (role === 'administrator') {
      history.push('/admin/manage');
    }
  };

  const validateLogin = async (newPost) => {
    const sucess = 200;
    const newPostLogin = await postLogin(newPost);
    if (newPostLogin.status === undefined) setInvalid(true);
    if (newPostLogin.status === sucess) {
      setDataToLocalStorage('user', newPostLogin.data);
      redirect(newPostLogin.data.role);
    }
  };

  const register = () => {
    history.push('/register');
  };
  return (
    <div>
      <label htmlFor="email">
        Login
        <input
          data-testid="common_login__input-email"
          name="email"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_login__input-password"
          name="password"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !login() }
        onClick={ () => validateLogin({ email }) }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => register() }
      >
        Ainda não tenho conta
      </button>
      {invalid && (
        <div data-testid="common_login__element-invalid-email">
          email invalido
        </div>)}
    </div>
  );
}
