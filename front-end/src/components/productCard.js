import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getCostumerProducts from '../api/costumerProducts';
import { setData } from '../helpers/localStorage';

function ProductCard() {
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);

  const history = useHistory();

  useEffect(() => { // gerencia estado incicial
    async function fetchData() {
      const data = await getCostumerProducts();
      setProducts(data);
      setQuantities(data.map(() => 0));
      setTotalPrices(data.map((product) => product.price * 0));
    }

    fetchData();
  }, []);

  // altera preços de acordo com a quantidade (gerenciado pelo estado local de quantities)
  useEffect(() => {
    const newTotalPrices = products.map(
      (product, index) => product.price * quantities[index],
    );
    setTotalPrices(newTotalPrices);
  }, [quantities, products]);

  // soma o valor total do carrinho e controla no estado local
  useEffect(() => {
    setShoppingCartTotal(totalPrices.reduce((sum, price) => sum + price, 0));
  }, [totalPrices]);

  return (
    <div>
      {totalPrices.length > 0 && products?.map((product, index) => (
        <div key={ product.id }>
          <p data-testid={ `customer_products__element-card-price-${product.id}` }>
            {totalPrices[index].toFixed(2).replace(/\./, ',')}
          </p>

          <img
            src={ product.urlImage }
            alt={ product.name }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />

          <h2 data-testid={ `customer_products__element-card-title-${product.id}` }>
            { product.name }
          </h2>

          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => {
              const newQuantities = [...quantities];
              newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
              /* impede que o numero fique negativo, definindo o máximo/mínimo como 0 */
              setQuantities(newQuantities);
            } }
            disabled={ quantities[index] === 0 }
          >
            -

          </button>

          <input
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            type="number"
            value={ quantities[index] }
            onChange={ (e) => {
              const newQuantities = [...quantities];
              // o Number() é necessário pq o input chega como string e dá problema na soma
              newQuantities[index] = Number(e.target.value);
              setQuantities(newQuantities);
            } }
          />

          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ () => {
              const newQuantities = [...quantities];
              newQuantities[index] += 1;
              setQuantities(newQuantities);
            } }
          >
            +
          </button>
        </div>

      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => {
          setData('shoppingCart', shoppingCartTotal.toFixed(2).replace(/\./, ','));
          history.push('/customer/checkout');
        } }
        disabled={ shoppingCartTotal === 0 }
      >
        Ver Carrinho: R$
        <div data-testid="customer_products__checkout-bottom-value">

          {shoppingCartTotal.toFixed(2).replace(/\./, ',')}
        </div>
      </button>
    </div>
  );
}

export default ProductCard;

// https://www.slingacademy.com/article/javascript-ways-to-calculate-the-sum-of-an-array/
