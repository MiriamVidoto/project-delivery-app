import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import getOrderDetails from '../api/orderDetails';
import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [saleProducts, setSaleProducts] = useState();

  const { id } = useParams();
  const user = getDataFromLocalStorage('user');
  const path = 'seller';
  const prefix = 'seller_order_details__';

  const getDatas = async () => {
    const orderData = await getOrderDetails(id);
    const { products } = orderData;
    setSaleProducts(products);
    setOrder(orderData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      {order && (
        <div>
          <h1>Detalhes do pedido</h1>
          <div>
            <span data-testid={ `${prefix}element-order-details-label-order-id` }>
              {` Pedido ${order.id}`}
            </span>
            <span data-testid={ `${prefix}element-order-details-label-order-date` }>
              { moment(order.saleDate).locale('pt-br').format('DD/MM/YYYY') }
            </span>
            <span data-testid={ `${prefix}element-order-details-label-delivery-status` }>
              { order.status }
            </span>
            <button
              type="button"
              data-testid={ `${prefix}button-preparing-check` }
            >
              Preparar Pedido
            </button>
            <button
              type="button"
              data-testid={ `${prefix}button-dispatch-check` }
              disabled
            >
              Saiu para entrega
            </button>
          </div>
          <OrderDetailsCard
            path="seller"
            productsData={ saleProducts }
            total={ order.totalPrice }
          />
        </div>
      )}
    </div>
  );
}
