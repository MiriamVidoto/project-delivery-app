import axios from 'axios';

const getSellers = async () => {
  try {
    const response = await axios.get('http://localhost:3001/users/sellers');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSellers;
