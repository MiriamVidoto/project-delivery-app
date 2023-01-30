import { validate } from 'email-validator';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import { getDataFromLocalStorage } from '../utils/localStorage';
import postRegisterAdmin from '../api/adminRegister';

export default function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Vendedor');
  const [response, setResponse] = useState('');
  const [reset, setReset] = useState(false);

  const user = getDataFromLocalStorage('user');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('Vendedor');
  };

  useEffect(() => {
    resetForm();
  }, [reset]);

  const register = () => {
    const minLengthName = 12;
    const minLengthPassword = 6;
    return (validate(email)
      && password.length >= minLengthPassword
      && name.length >= minLengthName
      && role.length !== '');
  };

  const createRegisterByAdmin = async () => {
    if (role === 'Vendedor') setRole('seller');
    if (role === 'Cliente') setRole('customer');
    if (role === 'Administrador') setRole('administrator');
    const data = { newRegister: { name, email, password, role }, tokenAdmin: user.token };
    const responseRegister = await postRegisterAdmin(data);
    if (!responseRegister) setResponse('ERRO!');
    if (responseRegister) setResponse('Usuário criado com sucesso!');
    setReset(!reset);
  };

  return (
    <div>
      <NavBar path="admin" name={ user.name } />
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            type="text"
            placeholder="seu-email@site.com.br"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="**********"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="tipo">
          Tipo
          <select
            name="tipo"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !register() }
          onClick={ () => createRegisterByAdmin() }
        >
          Cadastrar
        </button>
      </form>
      <span>{response}</span>
    </div>
  );
}
