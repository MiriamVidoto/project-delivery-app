import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCard from '../components/productCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

function Products() {
  const user = getDataFromLocalStorage('user');

  useEffect(() => {
  }, []);

  return (
    <div className="product-page">
      <NavBar path="customer" name={ user.name } />
      <div>
        <h1>Products Page</h1>
      </div>
      <ProductCard />
    </div>
  );
}

export default Products;
