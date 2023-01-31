import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const getSellerOrders = async (id) => {
  try {
    const response = await API.post('/seller/orders', id);
    return response.message;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default getSellerOrders;
