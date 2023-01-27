import React, { useState, useEffect } from 'react';
import getCostumerProducts from '../api/costumerProducts';

function ProductCard() {
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCostumerProducts();
      setProducts(data);
      setQuantities(data.map(() => 0));
    }
    fetchData();
  }, []);
  return (
    <div>
      {products?.map((product, index) => (
        <div
          key={ product.id }
        >
          <p data-testid={ `customer_products__element-card-price-${product.id}` }>
            {product.price.replace(/\./, ',')}
          </p>

          <img
            src={ product.urlImage }
            alt={ product.name }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />

          <h2 data-testid={ `customer_products__element-card-title-${product.id}` }>
            { product.name }
          </h2>

          {/* botões */}

          {/* remove itens */}

          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => {
              const newQuantities = [...quantities];
              newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
              /* impede que o numero fique negativo, definindo o máximo como 0 */

              setQuantities(newQuantities);
            } }
            disabled={ quantities[index] === 0 }
          >
            -

          </button>
          {/* desabilita quando chega a 0 */}

          <input
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            value={ quantities[index] }
            onChange={ (e) => {
              const newQuantities = [...quantities];
              newQuantities[index] = e.target.value;
              setQuantities(newQuantities);
            } }
          />

          {/* adds itens */}
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onChange={ () => {
              const newQuantities = [...quantities];
              newQuantities[index] += 1;
              setQuantities(newQuantities);
            } }
          >
            +
          </button>
        </div>

        // </div>
      ))}
    </div>
  );
}

export default ProductCard;
