import PropTypes from 'prop-types';
import React from 'react';

export default function OrderDetailsCard({ path, products, total }) {
  const prefix = `${path}_order_details__element-order-`;
  const price = 1;

  console.log(products);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((e, i) => (
              <tr key={ i }>
                <th data-testid={ `${prefix}table-item-number-${i}` }>
                  {(i + 1)}
                </th>
                <th data-testid={ `${prefix}table-name-${i}` }>
                  {e.productId}
                </th>
                <th data-testid={ `${prefix}table-quantity-${i}` }>
                  {e.quantity}
                </th>
                <th data-testid={ `${prefix}table-unit-price-${i}` }>
                  {price}
                </th>
                <th data-testid={ `${prefix}table-sub-total-${i}` }>
                  {(price * e.quantity).toFixed(2)}
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div data-testid={ `${prefix}total-price` }>
        {`Total R$ ${total}`}
      </div>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  path: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,
  total: PropTypes.string.isRequired,
};
