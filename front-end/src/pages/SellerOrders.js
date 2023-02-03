import React, { useState, useEffect } from 'react';
import getSellerOrders from '../api/sellerOrders';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrders() {
  const [sales, setSales] = useState();

  const LIMIT = 10;
  const path = 'seller';
  const user = getDataFromLocalStorage('user');

  useEffect(() => {
    async function getSales() {
      const orderSales = await getSellerOrders(user.id);
      setSales(orderSales);
    }
    getSales();
  }, []);

  const getDatas = async () => {
    const saleData = await getSellerOrders(user.id);
    setSales(saleData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      { sales && (
        <div className="orderCards">
          Pedidos
          {
            sales.slice(0, LIMIT)
              .map((e) => <OrderCard order={ e } path={ path } key={ e.id } />)
          }
        </div>
      )}
    </div>
  );
}
