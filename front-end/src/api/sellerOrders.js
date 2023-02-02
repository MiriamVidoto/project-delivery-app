import axios from 'axios';

const getSellerOrders = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/sales/seller/${id}`);
    return response.data;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default getSellerOrders;
