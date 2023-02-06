import PropTypes from 'prop-types';
import React from 'react';
import '../style/sellerOrderDetails.css';

export default function OrderDetailsCard({ products, total }) {
  const prefix = 'seller_order_details__element-order-';

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
            products.map(({ product, quantity, price }, i) => (
              <tr key={ i }>
                <th data-testid={ `${prefix}table-item-number-${i}` }>
                  {i}
                </th>
                <th data-testid={ `${prefix}table-name-${i}` }>
                  {product}
                </th>
                <th data-testid={ `${prefix}table-quantity-${i}` }>
                  {quantity}
                </th>
                <th data-testid={ `${prefix}table-unit-price-${i}` }>
                  {price}
                </th>
                <th data-testid={ `${prefix}table-sub-total-${i}` }>
                  {(price * quantity).toFixed(2)}
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div
        data-testid={ `${prefix}total-price` }
        className="total-price"
      >
        {`Total: R$ ${total}`}
      </div>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,
  total: PropTypes.number.isRequired,
};
