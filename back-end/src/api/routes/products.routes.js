const express = require('express');
const controller = require('../controllers/products.controller');

const productsRoutes = express.Router();

productsRoutes.get('/', controller.getProducts);
productsRoutes.get('/:id', controller.getProductsDetails);

module.exports = productsRoutes;
