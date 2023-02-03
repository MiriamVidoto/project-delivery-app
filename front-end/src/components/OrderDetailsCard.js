import PropTypes from 'prop-types';
import React from 'react';

export default function OrderDetailsCard({ path, products, total }) {
  const prefix = `${path}_order_details__element-order-`;

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
            products.length
            && products.map(({ quantity, products: product }, i) => (
              <tr key={ i }>
                <th data-testid={ `${prefix}table-item-number-${i}` }>
                  {(i + 1)}
                </th>
                <th data-testid={ `${prefix}table-name-${i}` }>
                  {product.name}
                </th>
                <th data-testid={ `${prefix}table-quantity-${i}` }>
                  {quantity}
                </th>
                <th data-testid={ `${prefix}table-unit-price-${i}` }>
                  {product.price}
                </th>
                <th data-testid={ `${prefix}table-sub-total-${i}` }>
                  {(product.price * quantity).toFixed(2)}
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div data-testid={ `${prefix}total-price` }>
        { total.replace(/\./, ',') }
      </div>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  path: PropTypes.string.isRequired,
  products: PropTypes.shape({
    length: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,

  total: PropTypes.string.isRequired,
};
