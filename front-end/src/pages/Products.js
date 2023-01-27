import React, { useEffect } from 'react';
import NavBar from '../components/navbar';

function Products() {
  useEffect(() => {
    console.log('montou');
  }, []);

  return (
    <div>
      <NavBar path="customer" />
      Products

    </div>
  );
}

export default Products;
