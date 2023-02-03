const { Products } = require('../../database/models');

const productsDetails = async (id) => {
  const product = await Products.findOne({
    where: { id },
    raw: true,
  });

  if (!product) return { status: 404, message: 'product not found' };
  return { status: 200, message: product };
};

module.exports = {
    productsDetails,
};
