const { Sale, SaleProducts, User, Products } = require('../../database/models');

const checkoutSale = async (data) => {
const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = data;
  const newSale = await Sale.create(
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber },
  );    
    products.map(async (e) => {
    const saleId = newSale.id;
    await SaleProducts.create({ saleId, ...e });
  });
  if (newSale) return { status: 201, message: newSale };
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

const orderDetails = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    raw: true,
  });
  if (!sale) {
    return { status: 404, message: 'sale not found' };
  }
  const sellerName = sale.sellerId
  ? await User.findOne(
    { where: { id: sale.sellerId }, raw: true },
  ).name
  : null;


  const products = await SaleProducts.findAll(
    { where: { saleId: sale.id }, include: [{ model: Products, as: 'products' }] },
  );
  return { status: 200, message: { ...sale, sellerName , products } };
};

const updateStatusSale = async (sale) => {
  const { id, status } = sale;
  const newSale = await Sale.update(
    { status },
    { where: { id } },
  );
  if (newSale) return { status: 201, message: newSale };
  return { status: 404, message: 'Failed' };
};

module.exports = {
    checkoutSale,
    ordersSeller,
    ordersCustomer,
    orderDetails,
    updateStatusSale,
};
