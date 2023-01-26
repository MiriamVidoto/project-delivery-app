const express = require('express');
const cors = require('cors');
const controllerLogin = require('./controller/login');
const controllerCostumerProducts = require('./controller/costumerProducts');

const app = express();

app.use(express.json());
app.use(cors());
app.get("/coffee", (_req, res) => res.status(418)
    .end());
app.post('/login', controllerLogin.login)
app.post('/register', controllerRegister.register);
app.post('/customer/products', controllerCostumerProducts.products);

module.exports = app;
