import React, { useEffect, useState } from 'react';
import '../style/customerCheckout.css';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../utils/localStorage';

export default function CheckoutCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.00);

  const totalPriceCartItems = () => {
    const cartLocalStorage = getDataFromLocalStorage('productsCart');
    if (cartLocalStorage) {
      const total = cartLocalStorage.map((item) => item.unitPrice * item.quantity)
        .reduce((curr, acc) => acc + curr, 0)
        .toFixed(2)
        .replace(/\./, ',');
      setTotalPrice(total);
      setDataToLocalStorage('shoppingCartTotal', total);
    }
  };

  const getDatas = () => {
    const cart = getDataFromLocalStorage('productsCart');
    if (cart) setCartItems(cart);
    totalPriceCartItems();
  };

  useEffect(() => {
    getDatas();
  }, []);

  const removeFromCart = ({ target }) => {
    const { id } = target;
    const cartItemsOld = getDataFromLocalStorage('productsCart');
    const newCartItems = cartItemsOld.filter(
      (item) => item.productId !== Number(id),
    );
    setCartItems(newCartItems);
    setDataToLocalStorage('productsCart', newCartItems);
    totalPriceCartItems();
  };

  return (
    <div className="checkout-card">
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
            cartItems.map((product, index) => (
              <tr key={ product.name }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {product.unitPrice.replace(/\./, ',')}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {product.subTotal}
                </td>
                <button
                  type="button"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
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
      </table>
      <h3
        data-testid="customer_checkout__element-order-total-price"
        className="price"
      >
        {
          `Total: ${totalPrice}`
        }
      </h3>
    </div>
  );
}
