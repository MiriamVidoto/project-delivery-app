import React from 'react';

export default function Login() {
  return (
    <div>
      <input data-testid="common_login__input-email" />
      <input data-testid="common_login__input-password" />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled
      >
        login

      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        register

      </button>
      <div>Login</div>
    </div>
  );
}
