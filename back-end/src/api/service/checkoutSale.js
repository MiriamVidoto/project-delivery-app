const { Sale } = require('../../database/models');

const checkoutSale = async (data) => {
  const newSale = await Sale.create(data);
  if (newSale) return { status: 201, message: newSale };
  return { status: 409, message: 'Conflict' };
};

module.exports = {
    checkoutSale,
};
