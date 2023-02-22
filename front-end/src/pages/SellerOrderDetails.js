import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';
import { updateSales, getSalesDetails } from '../api/salesApi';
import '../style/sellerOrderDetails.css';

export default function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [saleProducts, setSaleProducts] = useState();
  const [preparing, setPreparing] = useState(true);
  const [dispatch, setDispatch] = useState(true);
  const [reload, setReload] = useState(true);

  const { id } = useParams();
  const user = getDataFromLocalStorage('user');
  const path = 'seller';
  const prefix = 'seller_order_details__';

  const verifyStatus = (status) => {
    console.log(status);
    if (status === 'Pendente') setPreparing(false);
    if (status === 'Preparando') {
      setPreparing(true);
      setDispatch(false);
    }
  };

  const getDatas = async () => {
    const orderData = await getSalesDetails(id);
    const { products, status } = orderData;
    setSaleProducts(products);
    verifyStatus(status);
    setOrder(orderData);
  };

  useEffect(() => {
    getDatas();
  }, [reload]);

  const handleClick = (status) => {
    updateSales({ id: order.id, status });
    setReload(!reload);
  };

  return (
    <div className="page-seller-order-details">
      <NavBar path={ path } name={ user.name } />
      {order && (
        <div>
          <h1> Detalhes do pedido </h1>
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
              disabled={ preparing }
              onClick={ () => handleClick('Preparando') }
            >
              Preparar Pedido
            </button>
            <button
              type="button"
              data-testid={ `${prefix}button-dispatch-check` }
              disabled={ dispatch }
              onClick={ () => handleClick('Em Trânsito') }
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
