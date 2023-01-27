const service = require('../service/costumerProducts');

const costumerProducts = async (req, res) => {
  const result = await service.costumerProducts(req.body);
  return res.status(result.status).json(result.message);
};

module.exports = {
  costumerProducts,
};
