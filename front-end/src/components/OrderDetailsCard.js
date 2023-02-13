import PropTypes from 'prop-types';
import React from 'react';
import '../style/sellerOrderDetails.css';

export default function OrderDetailsCard({ path, productsData, total }) {
  const prefix = `${path}_order_details__element-order-`;

  return (
    <div className="component-order-details">
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
            productsData.map(({ quantity, products }, i) => (
              <tr key={ i }>
                <th data-testid={ `${prefix}table-item-number-${i}` }>
                  {(i + 1)}
                </th>
                <th data-testid={ `${prefix}table-name-${i}` }>
                  {products.name}
                </th>
                <th data-testid={ `${prefix}table-quantity-${i}` }>
                  {quantity}
                </th>
                <th data-testid={ `${prefix}table-unit-price-${i}` }>
                  {products.price}
                </th>
                <th data-testid={ `${prefix}table-sub-total-${i}` }>
                  {(products.price * quantity).toFixed(2)}
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
  productsData: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,

  total: PropTypes.string.isRequired,
};
