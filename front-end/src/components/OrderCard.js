import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({ order, path }) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;

  return (
    <Link to={ `/seller/orders/${id}` }>
      <span data-testid={ `${path}_orders__element-order-id-${id}` }>
        {`Pedido ${id}`}
      </span>
      <span data-testid={ `${path}_orders__element-delivery-status-${id}` }>
        {status}
      </span>
      <span data-testid={ `${path}_orders__element-order-date-${id}` }>
        {`${saleDate}`}
      </span>
      <span data-testid={ `${path}_orders__element-card-price-${id}` }>
        {`R$ ${totalPrice}`}
      </span>
      {
        path === 'seller' && (
          <span data-testid={ `${path}_orders__element-card-address-${id}` }>
            {`${deliveryAddress}, ${deliveryNumber}`}
          </span>
        )
      }
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
