import NavBar from '../components/navbar';
import OrderCard from '../components/OrderCard';

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

  return (
    <div>
      <NavBar path={ path } />
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
