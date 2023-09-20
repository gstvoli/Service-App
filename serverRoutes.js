const express = require('express');
const routes = express.Router();

const UserController = require('./src/controllers/UsersController');
const SessionController = require('./src/controllers/SessionController');
const ServicesController = require('./src/controllers/ServicesController');

routes.post('/api/login', SessionController.create);

routes.get('/api/users/:id', UserController.index);
routes.post('/api/register', UserController.create);

routes.get('/api/service/:id', ServicesController.index);
routes.get('/api/services', ServicesController.list);
routes.post('/api/newservice', ServicesController.create);

module.exports = routes;
