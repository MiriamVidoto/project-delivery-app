import React, { useEffect } from 'react';

function Products() {  

      useEffect(() => {
        console.log('montou');
      },[]);

  return (
    <div>Products</div>
  );
}

export default Products;
