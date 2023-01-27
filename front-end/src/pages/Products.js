import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCard from '../components/productCard';
import { getDataFromLocalStorage } from '../utils/localStorage';

function Products() {
  const user = getDataFromLocalStorage('user');

  useEffect(() => {
    console.log('montou');
  }, []);

  return (
    <div>
      <NavBar path="customer" name={ user.name } />
      Products
      <ProductCard />
    </div>
  );
}

export default Products;
