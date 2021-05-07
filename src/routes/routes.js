const express = require('express');

const routes = express.Router();

const CarController = require('../controllers/CarController');

routes.get('/carros', CarController.index);
routes.get('/carros/:id', CarController.show);
routes.post('/carros', CarController.store);
routes.put('/carros/:id', CarController.update);
routes.delete('/carros/:id', CarController.destroy);

module.exports = routes;