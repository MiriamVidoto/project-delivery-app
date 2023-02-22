const express = require('express');
const controller = require('../controllers/users.controller');


const loginRoute = express.Router();

loginRoute.post('/', controller.login);

module.exports = loginRoute;
