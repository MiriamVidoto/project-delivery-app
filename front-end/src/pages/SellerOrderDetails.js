import NavBar from '../components/navbar';
import OrderDetailsCard from '../components/OrderDetailsCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [saleProducts, setSaleProducts] = useState();

  const { id } = useParams();
  const user = getDataFromLocalStorage('user');
  const path = 'seller';
  const prefix = 'seller_order_details__';

  const getDatas = async () => {
    const orderData = await getOrderDetails(id);
    const { products } = orderData;
    setSaleProducts(products);
    setOrder(orderData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <NavBar path={ path } name={ user.name } />
      <div>
        <h1>Detalhe do pedido</h1>
        <div>
          <span data-testid={ `${prefix}element-order-details-label-order-id` }>
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
            data-testid={ `${prefix}button-preparing-check` }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            data-testid={ `${prefix}button-dispatch-check` }
          >
            Saiu para entrega
          </button>
        </div>
      </div>
      <OrderDetailsCard
        path="seller"
        products={ saleProducts }
        total={ order.totalPrice }
      />
    </div>
  );
}
