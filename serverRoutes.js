const express = require('express');
const routes = express.Router();

const UserController = require('./src/controllers/UsersController');
const SessionController = require('./src/controllers/SessionController');

routes.post('/api/login', SessionController.create);

routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.create);

module.exports = routes;
