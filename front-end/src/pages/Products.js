import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCard from '../components/productCard';

function Products() {
  useEffect(() => {
    console.log('montou Products Page');
  }, []);

  return (
    <div>

      <div>
        <h1>Products Page</h1>
      </div>
      <ProductCard />

      <NavBar path="customer" />
      Products


    </div>
  );
}

export default Products;
