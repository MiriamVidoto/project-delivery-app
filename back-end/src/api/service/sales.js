const { Sale, SaleProducts, User } = require('../../database/models');

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

  const { name } = await User.findOne(
    { where: { id: sale.sellerId },
      raw: true,
    },
  );
  const sellerName = name;

  const products = await SaleProducts.findAll(
    { where: { saleId: sale.id },
      raw: true,
    },
  );
  
  const data = await { ...sale, sellerName, products }

  return { status: 200, message: data };
};

module.exports = {
    checkoutSale,
    ordersSeller,
    ordersCustomer,
    orderDetails,
};
