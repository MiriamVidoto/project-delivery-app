import { validate } from 'email-validator';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import postLogin from '../api/login';
import { setDataToLocalStorage, getDataFromLocalStorage } from '../utils/localStorage';


export default function Login() {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const history = useHistory();

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


  const redirectToRoute = () => {
    const user = getDataFromLocalStorage('user');
    if (user) redirect(user.role);
  };

  useEffect(() => {
    redirectToRoute();
  });

  const login = () => {
    const numberSix = 6;
    return validate(userEmail) && password.length >= numberSix;
  };

  // const redirect2 = (role) => {
  //   if (role === 'customer') {
  //     history.push('/customer/orders');
  //   }
  //   if (role === 'seller') {
  //     history.push('/seller/orders');
  //   }
  //   if (role === 'administrator') {
  //     history.push('/admin/manage');
  //   }
  // };

//   useEffect(() => {
//     const user = getDataFromLocalStorage('user');
//     if (user) {
//       const { role } = user;
//       redirect(role);
//     }
//   }, []);


  const validateLogin = async (newPost) => {
    const sucess = 200;
    const newPostLogin = await postLogin(newPost);

    if (newPostLogin === undefined) setInvalid(true);
    else if (newPostLogin.status === sucess) {
      setDataToLocalStorage('user', newPostLogin.data);
      redirect(newPostLogin.data.role);
    }
    return newPostLogin;
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
        onClick={ () => validateLogin({ email: userEmail }) }
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
