import PropTypes from 'prop-types';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../style/navBar.css';

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
            onClick={ () => history.push('/products') }
            className="button-navBar"
          >
            Produtos
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => history.push('') }
            className="button-navBar"
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
      <div className="header-nav-bar-admin">
        { path === 'admin' && (
          <span
            data-testid="customer_products__element-navbar-link-orders"
            className="tittle-admin"
          >
            GERENCIAR USUÁRIOS
          </span>
        )}
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
