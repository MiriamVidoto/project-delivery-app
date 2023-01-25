import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postRegister = async (newRegister) => {
  const created = 201;
  try {
    const response = await API.post('/register', newRegister);
    return response;
  } catch (error) {
    console.log(error.stack);
  }
  return created;
};

export default postRegister;
