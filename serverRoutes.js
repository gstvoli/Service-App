const express = require('express');
const routes = express.Router();

const UserController = require('./src/controllers/UsersController');
const SessionController = require('./src/controllers/SessionController');

routes.post('/api/login', SessionController.create);

routes.get('/api/users/:id', UserController.index);
routes.post('/api/register', UserController.create);

module.exports = routes;
