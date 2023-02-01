const service = require('../service/sales');

const checkoutSale = async (req, res) => {
  const result = await service.checkoutSale(req.body);
  return res.status(result.status).json(result.message);
};

const ordersSeller = async (req, res) => {
  const { id } = req.body;
  const result = await service.ordersSeller(id);
  return res.status(result.status).json(result.message);
};

const ordersCustomer = async (req, res) => {
  const { id } = req.body;
  const result = await service.ordersCustomer(id);
  return res.status(result.status).json(result.message);
};

const orderDetails = async (req, res) => {
  const { id } = req.params;
  const result = await service.orderDetails(id);
  return res.status(result.status).json(result.message);
};

module.exports = {
  checkoutSale,
  ordersSeller, 
  ordersCustomer,
  orderDetails,
};
