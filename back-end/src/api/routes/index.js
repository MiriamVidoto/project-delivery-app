const express = require('express');
const loginRoute = require('./login.routes');
const userRoutes = require('./users.routes');
const productsRoutes = require('./products.routes');
const salesRoutes = require('./sales.routes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/users', userRoutes);
routes.use('/products', productsRoutes);
routes.use('/sales', salesRoutes);

module.exports = routes;
