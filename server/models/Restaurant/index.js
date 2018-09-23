const RestaurantSchema = require('./RestaurantSchema');
const mongoose = require('mongoose');

module.exports = mongoose.model('RestaurantModel', RestaurantSchema);
