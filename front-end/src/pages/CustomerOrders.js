import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrders() {
  const sales = [
    {
      id: 2,
      user_id: 3,
      seller_id: 5,
      totalPrice: 10.95,
      deliveryAddress: 'endereço',
      deliveryNumber: 23,
      saleDate: 'data',
      status: 'pendente',
    },
  ];

  const LIMIT = 10;
  const path = 'customer';
  const user = getDataFromLocalStorage('user');

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      <div className="orderCards">
        Pedidos
        {
          sales.slice(0, LIMIT)
            .map((e) => <OrderCard order={ e } path={ path } key={ e.id } />)
        }
      </div>
    </div>
  );
}
