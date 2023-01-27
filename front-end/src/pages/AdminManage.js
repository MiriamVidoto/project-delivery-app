import React from 'react';
import NavBar from '../components/navbar';

export default function AdminManage() {
  return (
    <div>
      <NavBar path="admin" />
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            type="text"
            placeholder="seu-email@site.com.br"
            name="email"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="text"
            placeholder="**********"
            name="senha"
          />
        </label>
        <label htmlFor="tipo">
          Tipo
          <select name="tipo" data-testid="admin_manage__select-role">
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
