import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({ order, path }) {
  return (
    <Link to={ `/seller/orders/${order.id}}` }>
      <span data-testid={ `${path}_orders__element-order-id-${order.id}` }>
        {`Pedido ${order.id}`}
      </span>
      <br />
      <span data-testid={ `${path}_orders__element-delivery-status-${order.id}` }>
        {order.status}
      </span>
      <br />
      <span data-testid={ `${path}_orders__element-order-date-${order.id}` }>
        {`${order.saleDate}`}
      </span>
      <br />
      <span data-testid={ `${path}_orders__element-card-price-${order.id}` }>
        {`R$ ${order.totalPrice}`}
      </span>
      <br />
      {
        path === 'seller' && (
          <span data-testid={ `${path}_orders__element-card-address-${order.id}` }>
            {`${order.deliveryAddress}, ${order.deliveryNumber}`}
          </span>
        )
      }
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
