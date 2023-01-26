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
        <NavBar />
        <h1>Products Page</h1>
      </div>
      <ProductCard />
    </div>
  );
}

export default Products;
