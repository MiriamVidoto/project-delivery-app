const { Sales } = require('../../database/models');

const sellerOrders = async (id) => {
  const sales = await Sales.find({
    where: { idSeller: id },
    raw: true,
  });
  if (!sales) {
    return { status: 404, message: 'sales not found' };
  }
  return { status: 200, message: sales };
};

module.exports = {
    sellerOrders,
};
