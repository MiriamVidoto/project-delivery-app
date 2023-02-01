const express = require('express');
const cors = require('cors');
const controllerLogin = require('./controller/login');
const controllerCostumerProducts = require('./controller/costumerProducts');
const controllerUsers = require('./controller/users');
const controllerSales = require('./controller/sales');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public')); 
app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllerLogin.login);
app.post('/users/register', controllerUsers.register);
app.post('/users/register/admin', controllerUsers.adminRegister);
app.get('/users/sellers', controllerUsers.getSellers);
app.get('/customer/products', controllerCostumerProducts.costumerProducts);
app.get('/sales/seller', controllerSales.ordersSeller);
app.get('/sales/customer', controllerSales.ordersCustomer);
app.get('/sales/details/:id', controllerSales.orderDetails);
app.post('/sales', controllerSales.checkoutSale);

module.exports = app;
