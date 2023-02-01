import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postRegisterAdmin = async (data, token) => {
  try {
    const response = await API
      .post('/users/register/admin', data, { headers: { authorization: token } });
    return response;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default postRegisterAdmin;
