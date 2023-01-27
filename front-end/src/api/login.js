import axios from 'axios';

const postLogin = async (newLogin) => {
  try {
    const response = await axios.post('http://localhost:3001/login', newLogin);
    // console.log('front API respose:', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
