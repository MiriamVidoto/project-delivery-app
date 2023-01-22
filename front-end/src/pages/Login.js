import { validate } from 'email-validator';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const numberSix = 6;
    return validate(email) && password.length >= numberSix;
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
      >
        Login

      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta

      </button>
      <div>Login</div>
    </div>
  );
}
