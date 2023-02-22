import React, { useState, useEffect } from 'react';
import { getSalesSeller } from '../api/salesApi';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import '../style/sellerOrders.css';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrders() {
  const [sales, setSales] = useState();

  const LIMIT = 10;
  const path = 'seller';
  const user = getDataFromLocalStorage('user');

  useEffect(() => {
    async function getSales() {
      const orderSales = await getSalesSeller(user.id);
      setSales(orderSales);
    }
    getSales();
  }, []);

  const getDatas = async () => {
    const saleData = await getSalesSeller(user.id);
    setSales(saleData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="page-seller-orders">
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
