import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getCostumerProducts from '../api/costumerProducts';
import { setData, getData } from '../helpers/localStorage';

function ProductCard() {
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);

  const history = useHistory();

  useEffect(() => {
    // gerencia estado inicial
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

  const handleClickShoppingCart = () => {
    setData(
      'shoppingCartTotal',
      shoppingCartTotal.toFixed(2).replace(/\./, ','),
    );
    history.push('/customer/checkout');
  };

  const handleClickProducts = (product, newQuantities, index) => {
    const oldCart = getData('productsCart');
    const newProduct = {
      productId: product.id,
      name: product.name,
      quantity: newQuantities[index],
      unitPrice: product.price,
      subTotal: (product.price * quantities[index])
        .toFixed(2)
        .replace(/\./, ','),
    };
    if (!oldCart || oldCart === null) {
      setData('productsCart', [newProduct]);
    } else {
      setData('productsCart', oldCart.concat(newProduct));
    }
  };

  return (
    <div>
      {totalPrices.length > 0
        && products?.map((product, index) => (
          <div key={ product.id }>
            <p>

              Preço:
              {' '}
              {product.price}
              {' '}
            </p>
            <p
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              {' '}
              Sub-total:
              {' '}
              {quantities[index] === 0
                ? product.price.replace(/\./, ',')
                : (product.price * quantities[index])
                  .toFixed(2)
                  .replace(/\./, ',')}
            </p>
            <img
              className="image"
              src={ product.urlImage }
              alt={ product.name }
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            />

            <h2
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              {product.name}
            </h2>

            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => {
                const newQuantities = [...quantities];
                newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
                /* impede que o numero fique negativo, definindo o máximo/mínimo como 0 */
                setQuantities(newQuantities);
                handleClickProducts(product, newQuantities, index);
              } }
              disabled={ quantities[index] === 0 }
            >
              -
            </button>

            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
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
                handleClickProducts(product, newQuantities, index);
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
          handleClickShoppingCart();
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
