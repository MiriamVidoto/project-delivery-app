const { Products } = require('../../database/models');

const getProducts = async () => {
  const product = await Products.findAll({
    raw: true,
  });
  if (!product) {
    return { status: 404, message: 'product not found' };
  }
  return { status: 200, message: product };
};

const getProductsDetails = async (id) => {
  const product = await Products.findOne({
    where: { id },
    raw: true,
  });

  if (!product) return { status: 404, message: 'product not found' };
  return { status: 200, message: product };
};

module.exports = {
  getProducts,
  getProductsDetails,
};
