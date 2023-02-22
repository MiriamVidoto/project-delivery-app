const express = require('express');
const controllerUsers = require('../controllers/users.controller');

const usersRoutes = express.Router();


usersRoutes.post('/register', controllerUsers.register);
usersRoutes.post('/register/admin', controllerUsers.adminRegister);
usersRoutes.get('/sellers', controllerUsers.getSellers);

module.exports = usersRoutes;
