import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCard from '../components/productCard';

function Products() {
  const user = getDataFromLocalStorage('user');

  useEffect(() => {
    console.log('montou Products Page');
  }, []);

  return (
    <div>
      <NavBar path="customer" name={ user.name } />
      <div>
        <h1>Products Page</h1>
      </div>
      <ProductCard />
    </div>
  );
}

export default Products;
