import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postRegister = async (newRegister) => {
  const create = 201;
  try {
    const response = await API.post('/register', newRegister);
    return response;
  } catch (error) {
    console.log(error.stack);
  }
  return create;
};

export default postRegister;
