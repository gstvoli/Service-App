const express = require('express');
const routes = express.Router();

const UserController = require('./src/controllers/UsersController');
const SessionController = require('./src/controllers/SessionController');
const ServicesController = require('./src/controllers/ServicesController');
const WorkerController = require('./src/controllers/WorkerController');
const OrdersController = require('./src/controllers/OrdersController');

routes.post('/api/login', SessionController.create);

routes.get('/api/users/:id', UserController.index);
routes.post('/api/register', UserController.create);

routes.get('/api/service/:id', ServicesController.index);
routes.get('/api/services', ServicesController.list);
routes.post('/api/newservice', ServicesController.create);

routes.get('/api/workers', WorkerController.list);
routes.get('/api/worker/:id', WorkerController.index);
routes.get('/api/worker/service/:id', WorkerController.serviceIndex);
routes.get('/api/newworker', WorkerController.create);

routes.get('/api/order/:id', OrdersController.index);
routes.get('/api/orders/:userId', OrdersController.list);
routes.post('/api/neworder', OrdersController.create);

module.exports = routes;
