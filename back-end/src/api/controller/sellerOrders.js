const service = require('../service/costumerProducts');

const sellerOrders = async (req, res) => {
  const { id } = req.body;
  const result = await service.costumerProducts(id);
  return res.status(result.status).json(result.message);
};

module.exports = {
  sellerOrders,
};