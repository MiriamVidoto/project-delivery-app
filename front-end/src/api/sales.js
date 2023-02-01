import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postSales = async (data, token) => {
  try {
    const response = await API
      .post('/sales', data, { headers: { authorization: token } });
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default postSales;
