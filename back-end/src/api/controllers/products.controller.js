const service = require('../services/products.service');

const getProducts = async (req, res) => {
  const result = await service.getProducts(req.body);
  return res.status(result.status).json(result.message);
};


const getProductsDetails = async (req, res) => {
  const { id } = req.params;
  const result = await service.getProductsDetails(id);
  return res.status(result.status).json(result.message);
};

module.exports = {
  getProducts,
  getProductsDetails,
};
