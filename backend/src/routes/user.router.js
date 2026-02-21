const Router = require('express');
const authController = require('../controllers/user.controller');
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
routes.post('/register', authController.signup);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
