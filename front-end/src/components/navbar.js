import React from 'react';
import { useHistory } from 'react-router-dom';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function NavBar() {
  const history = useHistory();
  const userData = getDataFromLocalStorage('user');

  const { name } = userData;

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

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
        onClick={ () => logout() }
      >
        Sair
      </button>
    </header>
  );
}
