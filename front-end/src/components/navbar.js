import React from 'react';
import { useHistory } from 'react-router-dom';
import { getDataFromLocalStorage } from '../utils/localStorage';
// o componente recebe dois parâmetros o nome do usuário recuperado do localStorage
// e o path para determinar quais links deve renderizar
// Fluxo customer tem dois links: PRODUTOS e MEUS PEDIDOS
// Fluxo seller tem um link: PEDIDOS
// Falta os data tests

export default function NavBar() {
  const history = useHistory();
  const { name } = getDataFromLocalStorage('user');
  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/products') }
      >
        Produtos
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('') }
      >
        Meus pedidos
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        onClick={ () => history.push('') }
      >
        {name}
      </button>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => history.push('') }
      >
        Sair
      </button>
    </header>
  );
}
