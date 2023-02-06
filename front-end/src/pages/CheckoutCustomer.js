import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import postSales from '../api/sales';
import getSellers from '../api/sellers';
import CheckoutCard from '../components/CheckoutCard';
import NavBar from '../components/navbar';
import '../style/customerCheckout.css';
import { getDataFromLocalStorage } from '../utils/localStorage';

export default function CheckoutCustomer() {
  const [user, setUser] = useState({ name: '' });
  const [sellers, setSellers] = useState([{ name: '', id: '' }]);
  const [sellerSelected, setSellerSelected] = useState(null);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [productsCart, setProductsCart] = useState([]);

  const history = useHistory();

  const newSale = () => {
    const sale = {
      userId: user.id,
      sellerId: sellerSelected,
      totalPrice: totalPriceCart,
      deliveryAddress: address,
      deliveryNumber: number,
      products: productsCart.map((e) => {
        const { productId, quantity } = e;
        return { productId, quantity };
      }),
    };
    return sale;
  };

  const setDatasLocalStorage = () => {
    const total = getDataFromLocalStorage('shoppingCartTotal');
    const fixTotal = total.replace(',', '.');
    if (total) setTotalPriceCart(fixTotal);

    const cart = getDataFromLocalStorage('productsCart');
    if (cart) setProductsCart(cart);
  };

  const handleClick = async () => {
    setDatasLocalStorage();
    const sale = newSale();
    const post = await postSales(sale, user.token);
    const { id } = post;
    if (post) history.push(`/customer/orders/${id}`);
  };

  const getDatas = async () => {
    const userData = getDataFromLocalStorage('user');
    if (user) setUser(userData);
    const sellersData = await getSellers();
    if (sellers) setSellers(sellersData);
    setDatasLocalStorage();
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="page-customer-checkout">
      <NavBar path="customer" name={ user.name } />
      <h1>Checkout Customer</h1>

      <h3> Detalhes e Endereço para Entrega</h3>
      <div className="form-customer-checkout">

        <label htmlFor="select">
          {' '}
          Vendedor
          <select
            id="select"
            name="select"
            data-testid="customer_checkout__select-seller"
            value={ sellerSelected }
            onChange={ (e) => setSellerSelected(e.target.value) }
          >
            <option value="" disabled selected>
              Selecione um vendedor
            </option>
            {
              sellers.map((seller) => (
                <option
                  key={ seller.id }
                  value={ seller.id }
                >
                  { seller.name }
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="inputText">
          Endereço
          <input
            type="text"
            id="inputText"
            data-testid="customer_checkout__input-address"
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
          />
        </label>

        <label htmlFor="inputText">
          Número
          <input
            type="text"
            id="inputText"
            data-testid="customer_checkout__input-address-number"
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>
      </div>
      <h4>Finalizar Pedido</h4>
      <CheckoutCard />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
      >
        Finalizar pedido
      </button>

    </div>
  );
}
