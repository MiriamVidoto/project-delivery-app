import { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrders() {
  const [sales, setSales] = useState([]);

  const getDatas = async () => {
    const saleData = await getDataFromLocalStorage();
    setSales(saleData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const LIMIT = 10;
  const path = 'customer';
  const user = getDataFromLocalStorage('user');

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
