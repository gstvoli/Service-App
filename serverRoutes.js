const express = require('express');

const UserController = require('./src/controllers/UsersController');

const routes = express.Router();

routes.post('/users', UserController.index);
routes.post('/users', UserController.create);

module.exports = routes;
