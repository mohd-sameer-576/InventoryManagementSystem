const Router = require('express')
const productcontroller = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');


const routes = new Router();

routes.get('/', authMiddleware, productcontroller.getProducts);
routes.post('/', authMiddleware, productcontroller.createProduct);