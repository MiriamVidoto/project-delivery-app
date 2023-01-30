const express = require('express');
const cors = require('cors');
const controllerLogin = require('./controller/login');
const controllerRegister = require('./controller/register');
const controllerAdminRegister = require('./controller/adminRegister');
const controllerCostumerProducts = require('./controller/costumerProducts');
const controllerSellerOrders  = require('./controller/sellerOrders');
const controllerCheckoutSale = require('./controller/checkoutSale');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public')); 
app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllerLogin.login);
app.post('/register', controllerRegister.register);
app.post('/admin/register', controllerAdminRegister.adminRegister);
app.get('/customer/products', controllerCostumerProducts.costumerProducts);
app.get('/seller/orders', controllerSellerOrders.sellerOrders);
app.post('/checkout/sale', controllerCheckoutSale.checkoutSale);

module.exports = app;
