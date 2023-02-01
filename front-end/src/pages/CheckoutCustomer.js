import React from 'react';
import NavBar from '../components/navbar';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../utils/localStorage';

class CheckoutCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      totalPrice: 0.00,
    };
  }

  componentDidMount() {
    const cartItems = getDataFromLocalStorage('productsCart');
    if (cartItems) {
      this.setState({
        cartItems,
      }, () => this.totalPriceCartItems());
    }
  }

  totalPriceCartItems = () => {
    const cartItems = getDataFromLocalStorage('productsCart');
    console.log(cartItems);
    if (cartItems) {
      const total = cartItems.map((item) => item.unitPrice * item.quantity)
        .reduce((curr, acc) => acc + curr, 0)
        .toFixed(2)
        .replace(/\./, ',');
      this.setState({
        totalPrice: total,
      });
    }
  };

  removeFromCart = ({ target }) => {
    const { id } = target;
    const cartItemsOld = getDataFromLocalStorage('productsCart');
    const newCartItems = cartItemsOld.filter(
      (item) => item.productId !== Number(id),
    );
    this.setState({
      cartItems: newCartItems,
    });
    setDataToLocalStorage('productsCart', newCartItems);
    this.totalPriceCartItems();
  };

  render() {
    const { cartItems, totalPrice } = this.state;
    return (
      <div>
        <NavBar />
        <h1>Checkout Customer</h1>

        <div>
          <h3> Detalhes e Endereço para Entrega</h3>

          <label htmlFor="select">
            P. Vendedora Responsável:
            <select
              id="select"
              data-testid="customer_checkout__select-seller"
            >
              <option value="nomes dos vendedores">Nomes dos vendedores</option>
            </select>
          </label>

          <label htmlFor="inputText">
            Endereço
            <input
              type="text"
              id="inputText"
              data-testid="customer_checkout__input-address"
            />
          </label>

          <label htmlFor="inputText">
            Número
            <input
              type="text"
              id="inputText"
              data-testid="customer_checkout__input-address-number"
            />
          </label>

          <h4>Finalizar Pedido</h4>

          <table id="table">
            <thead>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover item</th>
            </thead>

            <tbody>
              {
                cartItems.map((product, index) => (

                  <tr key={ product.name }>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${index}`
                      }
                    >
                      {index + 1 }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
                    >
                      {product.name}

                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${index}`
                      }
                    >
                      {product.quantity}

                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-unit-price-${index}`
                      }
                    >
                      {product.unitPrice.replace(/\./, ',')}

                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${index}`
                      }
                    >
                      {product.subTotal}

                    </td>
                    <button
                      type="button"
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      id={ product.productId }
                      onClick={ (e) => {
                        this.removeFromCart(e);
                      } }
                    >
                      Remover

                    </button>
                  </tr>
                ))
              }
            </tbody>
            <h3
              data-testid="customer_checkout__element-order-total-price"
            >
              {
                `${totalPrice}`
              }
            </h3>

          </table>

        </div>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>

      </div>
    );
  }
}

export default CheckoutCustomer;
