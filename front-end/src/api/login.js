import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

const postLogin = async (newLogin) => {
  const notFound = 404;
  try {
    const response = await API.post('/login', newLogin);
    return response;
  } catch (error) {
    console.log(error.stack);
  }
  return notFound;
};

export default postLogin;
