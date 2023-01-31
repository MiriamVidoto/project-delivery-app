import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import NavBar from './navbar';

function TotalCart() {
  const [disabled, setDisabled] = useState(true);
  const { sumTotal } = useContext(CartContext) || {};
  const navigate = useHistory();

  const showCartButton = () => {
    if (sumTotal > 0) return setDisabled(false);
    return setDisabled(true);
  };

  useEffect(() => {
    showCartButton();
  }, [sumTotal]);

  return (
    <div>
      <NavBar />
      <button
        data-testid="customer_products__button-cart"
        type="submit"
        disabled={ disabled }
        onClick={ () => navigate('/customer/checkout') }
      >
        {' '}
        Ver carrinho: R$
        {' '}
        <span data-testid="customer_products__checkout-bottom-value">
          {/* { `${sumTotal.toString().replace('.', ',')}` } */}
          { sumTotal }
        </span>
      </button>
    </div>
  );
}

export default TotalCart;
