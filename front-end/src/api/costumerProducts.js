import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const getCostumerProducts = async () => {
  const sucess = 201;
  try {
    const result = await API.get('/customer/products');
    const products = result.data;
    // console.log('front api products:', products);
    return products;
  } catch (error) {
    console.log(error.stack);
  }
  return sucess;
};

export default getCostumerProducts;
