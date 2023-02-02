import getSellerOrders from '../api/sellerOrders';
import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default async function SellerOrders() {
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

  const getSellerOrdersById = async (id) => {
    const sellerOrders = await getSellerOrders(id);
    return sellerOrders;
  };
  console.log('sellerOrders', await getSellerOrdersById({ id: user.id }));

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
