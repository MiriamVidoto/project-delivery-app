import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  const values = React.useMemo(() => ({
    cart, setCart, sumTotal,
  }), [cart, sumTotal]);

  useEffect(() => {
    const manipulatePurchaseTotal = () => {
      if (!cart.length) return setSumTotal(0);
      const productsAmount = cart.map((product) => (product.price * product.quantity));
      const totalAmount = productsAmount.reduce((acc, curr) => acc + curr);
      setSumTotal(totalAmount);
    };
    manipulatePurchaseTotal();
  }, [cart]);

  useEffect(() => {
    const getCartFromLS = () => {
      const getCart = localStorage.getItem('cart');
      const sendCart = getCart === null ? [] : JSON.parse(getCart);
      setCart(sendCart);
    };
    getCartFromLS();
  }, []);

  return (
    <CartContext.Provider
      value={ values }
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
