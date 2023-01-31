import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CustomerOrderDetails() {
  const order = {
    id: 1,
    user_id: 3,
    seller_id: 5,
    totalPrice: 253.95,
    delivery_address: '',
    delivery_number: '',
    sale_date: '',
    status: '',
    products: [
      { product: 'produto1', price: 1.99, quantity: 3 },
      { product: 'produto3', price: 3.99, quantity: 2 },
      { product: 'produto7', price: 9.99, quantity: 5 },
    ],
  };
  const user = getDataFromLocalStorage('user');
  const path = 'customer';
  const prefix = 'customer_order_details__';

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      <div>
        <h1>Detalhe do pedido</h1>
        <div>
          <span data-testid={ `${prefix}element-order-details-label-order-${id}` }>
            {` Pedido ${order.id}`}
          </span>
          <span data-testid={ `${prefix}element-order-details-label-order-date` }>
            { order.sale_date }
          </span>
          <span data-testid={ `${prefix}element-order-details-label-delivery-status` }>
            { order.status }
          </span>
          <button
            type="button"
            data-testid={ `${prefix}button-delivery-check` }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </div>
      <OrderDetailsCard products={ order.products } total={ order.totalPrice } />
    </div>
  );
}
