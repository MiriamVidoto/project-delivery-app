import { useEffect, useState } from 'react';
import getSellerOrders from '../api/sellerOrders';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrders() {
  const LIMIT = 10;
  const path = 'seller';
  const user = getDataFromLocalStorage('user');
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getSales() {
      const orderSales = await getSellerOrders(user.id);
      setSales(orderSales);
    }
    getSales();
  }, []);

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      <div className="orderCards">
        Pedidos
        {
          sales.length
            && sales.slice(0, LIMIT)
              .map((e) => <OrderCard order={ e } path={ path } key={ e.id } />)
        }
      </div>
    </div>
  );
}
