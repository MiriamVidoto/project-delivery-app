import React, { useEffect } from 'react';
import NavBar from '../components/navbar';
import ProductCard from '../components/productCard';

function Products() {
  useEffect(() => {
  }, []);

  return (
    <div>

      <div>
        <h1>Products Page</h1>
      </div>

      <NavBar path="customer" />
      <h2>Products</h2>

      <ProductCard />
    </div>
  );
}

export default Products;
