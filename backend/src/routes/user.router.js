const Router = require('express');
const authController = require('../controllers/user.controller');
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes

routes.post('/register', authController.signup);
routes.post('/login', authController.login);


module.exports = routes;
