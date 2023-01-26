const { Products } = require('../../database/models');

const costumerProducts = async () => {
  const product = await Products.findAll({
    raw: true,
  });
  console.log('service product:', product);
  if (!product) {
    return { status: 404, message: 'product not found' };
  }
  return { status: 200, message: product };
};

module.exports = {
    costumerProducts,
};
