import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';
import { updateSales, getSalesDetails } from '../api/salesApi';

export default function CustomerOrderDetails() {
  const [order, setOrder] = useState();
  const [saleProducts, setSaleProducts] = useState();
  const [disable, setDisable] = useState(true);
  const [reload, setReload] = useState(true);

  const { id } = useParams();
  const user = getDataFromLocalStorage('user');
  const path = 'customer';
  const prefix = 'customer_order_details__';

  const getDatas = async () => {
    const orderData = await getSalesDetails(id);
    const { products } = orderData;
    setSaleProducts(products);
    setOrder(orderData);
    if (orderData.status === 'Em Trânsito') setDisable(false);
    else setDisable(true);
  };

  useEffect(() => {
    getDatas();
  }, [reload]);

  const handleClick = (status) => {
    updateSales({ id: order.id, status });
    setReload(!reload);
  };

  return (
    <div className="page-order-details">
      <div className="customer-order-details">
        <NavBar path={ path } name={ user.name } />
      </div>
      { order && (
        <>
          <div className="customer-details-topo">
            <div className="details-order">
              <span
                data-testid={ `${prefix}element-order-details-label-order-${order.id}` }
              >
                {` Pedido ${order.id}`}
              </span>
              <span data-testid={ `${prefix}element-order-details-label-order-date` }>
                { moment(order.saleDate).locale('pt-br').format('DD/MM/YYYY')}
              </span>
              <span
                data-testid={ `${prefix}element-order-details-label-delivery-status` }
              >
                { order.status }
              </span>
              <button
                type="button"
                data-testid={ `${prefix}button-delivery-check` }
                className="button-entregue"
                disabled={ disable }
                onClick={ () => handleClick('Entregue') }
              >
                MARCAR COMO ENTREGUE
              </button>
            </div>
          </div>
          <OrderDetailsCard
            order={ order }
            path="customer"
            productsData={ saleProducts }
            total={ order.totalPrice }
          />
        </>
      )}
    </div>
  );
}
