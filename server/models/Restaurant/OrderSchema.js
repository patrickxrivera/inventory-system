const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  dish: String,
  price: String
});

module.exports = OrderSchema;
