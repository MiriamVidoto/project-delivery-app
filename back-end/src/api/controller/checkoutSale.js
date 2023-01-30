const service = require('../service/checkoutSale');

const checkoutSale = async (req, res) => {
  const result = await service.checkoutSale(req.body);
  return res.status(result.status).json(result.message);
};

module.exports = {
  checkoutSale,
};