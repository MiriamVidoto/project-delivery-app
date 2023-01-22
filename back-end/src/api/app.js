const express = require('express');
const controllerLogin = require('./controller/login');

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', controllerLogin.login);

module.exports = app;
