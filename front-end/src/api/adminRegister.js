import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postRegisterAdmin = async (data) => {
  const created = 201;
  try {
    const response = await API.post('/admin/register', data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.stack);
  }
  return created;
};

export default postRegisterAdmin;
