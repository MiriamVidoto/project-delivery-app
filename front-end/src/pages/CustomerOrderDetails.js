import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import getOrderDetails from '../api/orderDetails';
import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrderDetails() {
  const [order, setOrder] = useState();

  const [saleProducts, setSaleProducts] = useState();
  const [disable, setDisable] = useState(true);


  const { id } = useParams();
  const user = getDataFromLocalStorage('user');
  const path = 'customer';
  const prefix = 'customer_order_details__';

  const getDatas = async () => {
    const orderData = await getOrderDetails(id);
    const { products } = orderData;
    setSaleProducts(products);
    setOrder(orderData);
    if (orderData.status === 'Em Trânsito') setDisable(false);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <h1>details</h1>
      <NavBar path={ path } name={ user.name } />
      {
        order && (
          <div>
            <h1>Detalhes do pedido</h1>
            <span data-testid={ `${prefix}element-order-details-label-order-id` }>
              {` Pedido ${order.id}`}
            </span>
            <span data-testid={ `${prefix}element-order-details-label-seller-name` }>
              { `P Vend: ${order.sellerName}`}
            </span>
            <span data-testid={ `${prefix}element-order-details-label-order-date` }>
              { moment(order.saleDate).locale('pt-br').format('DD/MM/YYYY')}
            </span>
            <span data-testid={ `${prefix}element-order-details-label-delivery-status` }>
              { order.status }
            </span>
            <button
              type="button"
              data-testid={ `${prefix}button-delivery-check` }
              disabled={ disable }
            >
              MARCAR COMO ENTREGUE
            </button>
            <OrderDetailsCard
              path="customer"
              productsData={ saleProducts }
              total={ order.totalPrice }
            />
          </div>
        )
      }
    </div>
  );
}
