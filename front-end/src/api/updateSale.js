import axios from 'axios';

const updateStatus = async (sale) => {
  try {
    const response = await axios.put('http://localhost:3001/sales', sale);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default updateStatus;
