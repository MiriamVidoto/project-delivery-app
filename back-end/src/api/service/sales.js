const { Sale, SaleProducts } = require('../../database/models');

const checkoutSale = async (data) => {
const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = data;
  const newSale = await Sale.create(
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber },
  );    
    products.map(async (e) => {
    const saleId = newSale.id;
    await SaleProducts.create({ saleId, ...e });
  });
  if (newSale) return { status: 201, message: 'Created' };
  return { status: 404, message: 'Failed' };
};

const ordersSeller = async (id) => {
  const sales = await Sale.findAll({
    where: { sellerId: id },
    raw: true,
  });
  if (!sales) {
    return { status: 404, message: 'sales not found' };
  }
  return { status: 200, message: sales };
};

const ordersCustomer = async (id) => {
  const sales = await Sale.findAll({
    where: { userId: id },
    raw: true,
  });
  if (!sales) {
    return { status: 404, message: 'sales not found' };
  }
  return { status: 200, message: sales };
};

module.exports = {
    checkoutSale,
    ordersSeller,
    ordersCustomer,
};
