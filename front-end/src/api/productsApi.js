import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const getProducts = async () => {
  try {
    const response = await API.get('/products');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsDetails = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
