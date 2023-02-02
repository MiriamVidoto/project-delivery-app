import axios from 'axios';

const getSellerOrders = async (id) => {
  console.log('api', id);
  try {
    const response = await axios.get(`http://localhost:3001/sales/seller/:${id}`);
    console.log('api front', response);

    return response.message;
  } catch (error) {
    console.log('catch', error.stack);
  }
};

export default getSellerOrders;
