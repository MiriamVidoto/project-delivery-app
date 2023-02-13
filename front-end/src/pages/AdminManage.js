import { validate } from 'email-validator';
import React, { useEffect, useState } from 'react';
import postRegisterAdmin from '../api/adminRegister';
import NavBar from '../components/navbar';
import '../style/adminManage.css';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [response, setResponse] = useState('');
  const [reset, setReset] = useState(false);
  const [message, setMessage] = useState('seller');

  const user = getDataFromLocalStorage('user');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('seller');
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
    if (role === 'Cliente') setRole('customer');
    if (role === 'Administrador') setRole('administrator');
    if (role === 'Vendedor') setRole('seller');
    const data = { newRegister: { name, email, password, role } };
    const responseRegister = await postRegisterAdmin(data, user.token);
    if (!responseRegister) {
      setResponse('ERRO!');
      setMessage('Verifique as credenciais ou os dados');
    }
    if (responseRegister) {
      setResponse('Usuário criado com sucesso!');
      setMessage('');
    }
    setReset(!reset);
  };

  return (
    <div className="page-adminManage">
      <NavBar path="admin" name={ user.name } />
      <form className="form-admin">
        <h1>Cadastrar novo usuário</h1>
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
            className="select-options"
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
          className="button-cadastrar"
        >
          Cadastrar
        </button>
      </form>
      <span>{response}</span>
      {
        message.length > 0
        && <span data-testid="admin_manage__element-invalid-register">{ message }</span>
      }
    </div>
  );
}
