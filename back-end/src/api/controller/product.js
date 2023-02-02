const service = require('../service/product');

const productsDetails = async (req, res) => {
  const { id } = req.params;
  const result = await service.productsDetails(id);
  return res.status(result.status).json(result.message);
};

module.exports = {
  productsDetails,
};
