import axios from 'axios';

const postRegister = async (newRegister) => {
  try {
    const response = await axios.post('http://localhost:3001/users/register', newRegister);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postRegister;
