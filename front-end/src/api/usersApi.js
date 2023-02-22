import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const postLogin = async (newLogin) => {
  try {
    const response = await API.post('/login', newLogin);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postRegisterAdmin = async (data, token) => {
  try {
    const response = await API
      .post('/users/register/admin', data, { headers: { authorization: token } });
    return response;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export const postRegister = async (data) => {
  try {
    const response = await API.post('/users/register', data);
    return response;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export const getSellers = async () => {
  try {
    const response = await API.get('/users/sellers');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
