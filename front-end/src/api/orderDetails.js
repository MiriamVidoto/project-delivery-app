import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const getOrderDetails = async (id) => {
  try {
    const response = await API.get(`/sales/details/${id}`);
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default getOrderDetails;
