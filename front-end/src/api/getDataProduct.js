import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const getProduct = async (id) => {
  try {
    const response = await API.get(`/product/details/${id}`);
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default getProduct;
