import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const postSales = async (data, token) => {
  try {
    const response = await API
      .post('/sales', data, { headers: { authorization: token } });
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export const getSalesCustomer = async (id, token) => {
  try {
    const response = await API.get(
      `/sales/customer/${id}`,
      { headers: { authorization: token } },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSalesSeller = async (id, token) => {
  try {
    const response = await API.get(
      `/sales/seller/${id}`,
      { headers: { authorization: token } },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSalesDetails = async (id, token) => {
  try {
    const response = await API.get(
      `/sales/details/${id}`,
      { headers: { authorization: token } },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSales = async (data, token) => {
  try {
    const response = await API
      .put('/sales', data, { headers: { authorization: token } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
