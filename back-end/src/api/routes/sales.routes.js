const express = require('express');
const controllerSales = require('../controllers/sales.controller');

const salesRoutes = express.Router();

salesRoutes.get('/seller/:id', controllerSales.ordersSeller);
salesRoutes.get('/customer/:id', controllerSales.ordersCustomer);
salesRoutes.get('/details/:id', controllerSales.orderDetails);
salesRoutes.post('/', controllerSales.checkoutSale);
salesRoutes.put('/', controllerSales.updateStatusSale);

module.exports = salesRoutes;
