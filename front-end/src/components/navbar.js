import PropTypes from 'prop-types';
import React from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';
import { getDataFromLocalStorage } from '../utils/localStorage';
=======
import { getDataFromLocalStorage } from '../utils/localStorage';
import { useHistory, Link } from 'react-router-dom';
>>>>>>> 84005b25e775916c26e6a16d1a23345ec5001717

export default function NavBar({ path }) {
  const history = useHistory();
  const userData = getDataFromLocalStorage('user');

  const { name } = userData;

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header>
      { path === 'customer' && (
        <>
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
        </>
      ) }
      { path === 'seller' && (
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS
        </Link>
      )}
      { path === 'admin' && (
        <span data-testid="customer_products__element-navbar-link-orders">
          GERENCIAR USUÁRIOS
        </span>
      )}
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

NavBar.propTypes = {
  path: PropTypes.string.isRequired,
};
