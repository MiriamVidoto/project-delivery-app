import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import '../style/sellerOrders.css';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrders() {
  const sales = [
    {
      id: 1,
      user_id: 1,
      seller_id: 1,
      totalPrice: 253.95,
      deliveryAddress: 'endereço',
      deliveryNumber: 25,
      saleDate: 'data',
      status: 'pendente',
    },
  ];

  const LIMIT = 10;
  const path = 'seller';
  const user = getDataFromLocalStorage('user');

  return (
    <div className="page-seller-orders">
      <NavBar path={ path } name={ user.name } />
      <div className="orderCards">
        {/* <h3>Pedidos</h3> */}
        {
          sales.slice(0, LIMIT)
            .map((e) => <OrderCard order={ e } path={ path } key={ e.id } />)
        }
      </div>
    </div>
  );
}
