import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const getCostumerProducts = async () => {
  const sucess = 201;
  try {
    const products = await API.get('/customer/products');
    console.log('cfront api product:', products);
    return products;
  } catch (error) {
    console.log(error.stack);
  }
  return sucess;
};

export default getCostumerProducts;
