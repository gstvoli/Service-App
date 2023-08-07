const express = require('express');
const routes = express.Router();

const UserController = require('./src/controllers/UsersController');
const SessionController = require('./src/controllers/SessionController');

routes.post('/login', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

module.exports = routes;
