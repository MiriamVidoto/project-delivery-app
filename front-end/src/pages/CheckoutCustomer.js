import React, { useState } from 'react';
import NavBar from '../components/navbar';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../utils/localStorage';

function CheckoutCustomer() {
  const productsListMock = [
    {
      id: 1,
      productId: 1,
      name: 'Cerveja Stella 250ml',
      quantity: 3,
      unitPrice: 3.50,
      subTotal: 10.50,
    },
    {
      id: 2,
      productId: 2,
      name: 'Cerveja Skol Latão 450ml',
      quantity: 4,
      unitPrice: 4.10,
      subTotal: 16.40,
    },
    {
      id: 3,
      productId: 3,
      name: 'Salgadinho Torcida Churrasco',
      quantity: 1,
      unitPrice: 1.56,
      subTotal: 1.56,
    },
  ];
  const [productsMock] = useState(productsListMock);

  const itemsCart = getDataFromLocalStorage('cartItems');
  
  // const [cartItems, setCartItems] = useState(itemsCart);

  const removeFromCart = ({ target }) => {
    const { id } = target;
    const cartItems = getDataFromLocalStorage('cartItems');
    const newCartItems = cartItems.filter(({ id: filterId }) => filterId !== id);

    setDataToLocalStorage('cartItems', newCartItems);
    // setCartItems(newCartItems);
  };

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

        <h4>Finalizar Pedido</h4>

        <table id="table">
          <thead>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </thead>

          <tbody>
            {
              productsMock.map((product, index) => (

                <tr key={ product.name }>
                  <td
                    data-testid={ `
                    customer_checkout__element-order-table-item-number-${index}` }
                  >
                    {product.productId}
                  </td>
                  <td
                    data-testid={ `
                    customer_checkout__element-order-table-name-${index}` }
                  >
                    {product.name}

                  </td>
                  <td
                    data-testid={ `
                    customer_checkout__element-order-table-quantity-${index}` }
                  >
                    {product.quantity}

                  </td>
                  <td
                    data-testid={ `
                    customer_checkout__element-order-table-unit-price-${index}` }
                  >
                    {product.unitPrice}

                  </td>
                  <td
                    data-testid={ `
                    customer_checkout__element-order-table-sub-total-${index}` }
                  >
                    {product.subTotal}

                  </td>
                  <button
                    type="button"
                    data-testid={ `
                  customer_checkout__element-order-table-remove-${index}` }
                    id={ product.productId }
                    onClick={ (e) => {
                      removeFromCart(e);
                    } }
                  >
                    Remover

                  </button>
                </tr>
              ))
            }
          </tbody>
          {`Total: R$ ${0.00.toFixed(2)}`}
        </table>

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
