import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postSales = async (data) => {
  try {
    const response = await API
      .post('/sales', data);
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default postSales;
