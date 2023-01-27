const express = require('express');
const cors = require('cors');
const controllerLogin = require('./controller/login');
const controllerRegister = require('./controller/register');
const controllerCostumerProducts = require('./controller/costumerProducts');
const controllerAdminRegister = require('./controller/adminRegister');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public')); 
app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllerLogin.login);
app.post('/register', controllerRegister.register);

module.exports = app;