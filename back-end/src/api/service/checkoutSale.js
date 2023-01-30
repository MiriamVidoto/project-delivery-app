const { Sale } = require('../../database/models');

const checkoutSale = async (data) => {
  const sales = await Sale.create(data);
  if(sales) return { status: 201, message: userCreate }
  return { status: 409, message: 'Conflict' };
};

module.exports = {
    checkoutSale,
};
