import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar({ path, name }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="header-navBar">
      { path === 'customer' && (
        <>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            className="button-navBar"
            onClick={ () => history.push('/customer/products') }
          >
            Produtos
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            className="button-navBar"
            onClick={ () => history.push('/customer/orders') }
          >
            Meus pedidos
          </button>
        </>
      ) }
      { path === 'seller' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/seller/orders') }
        >
          PEDIDOS
        </button>
      )}
      { path === 'admin' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          className="button-navBar"
        >
          GERENCIAR USUÁRIOS
        </button>
      )}
      <div className="header-nav-bar-admin">
        <div className="buttons-nav-bar">
          <button
            type="button"
            data-testid="customer_products__element-navbar-user-full-name"
            onClick={ () => history.push('') }
            className="button-navBar"
          >
            {name}
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
            className="button-navBar"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

NavBar.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
