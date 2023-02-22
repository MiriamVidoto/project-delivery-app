import React, { useState, useEffect } from 'react';
import { getSalesCustomer } from '../api/salesApi';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrders() {
  const [sales, setSales] = useState();

  const LIMIT = 10;
  const path = 'customer';
  const user = getDataFromLocalStorage('user');

  const getDatas = async () => {
    const saleData = await getSalesCustomer(user.id);
    setSales(saleData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="page-seller-orders">
      <NavBar path={ path } name={ user.name } />
      { sales && (
        <div>
          {
            sales.slice(0, LIMIT)
              .map((e) => <OrderCard order={ e } path={ path } key={ e.id } />)
          }
        </div>
      )}
    </div>
  );
}
