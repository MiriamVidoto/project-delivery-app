import React from 'react';
import NavBar from '../components/navbar';

function CheckoutCustomer() {
  return (
    <div>
      <NavBar />
      <h1>Checkout Customer</h1>

      <div>
        <h3> Detalhes e Endereço para Entrega</h3>

        <label htmlFor="select">
          P. Vendedora Responsável:
          <select
            id="select"
            data-testid="customer_checkout__select-seller"
          >
            <option value="nomes dos vendedores">Nomes dos vendedores</option>
          </select>
        </label>

        <label htmlFor="inputText">
          Endereço
          <input
            type="text"
            id="inputText"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="inputText">
          Número
          <input
            type="text"
            id="inputText"
            data-testid="customer_checkout__input-address-number"
          />
        </label>

      </div>

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar pedido
      </button>

    </div>
  );
}

export default CheckoutCustomer;
