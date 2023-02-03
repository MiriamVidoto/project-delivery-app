import React, { useState, useEffect } from 'react';
import getCostumerOrders from '../api/costumerOrders';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrders() {
  const [sales, setSales] = useState();

  const LIMIT = 10;
  const path = 'customer';
  const user = getDataFromLocalStorage('user');

  const getDatas = async () => {
    const saleData = await getCostumerOrders(user.id);
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
