const express = require('express');
const restaurantController = require('../controllers/restaurant');
const RestaurantModel = require('../models/Restaurant');

const apiRouter = express.Router();

apiRouter.post('/restaurant', restaurantController.create(RestaurantModel));
apiRouter.get('/restaurant', restaurantController.get(RestaurantModel));

module.exports = apiRouter;
