const mongoose = require('mongoose');
const OrderSchema = require('./OrderSchema');

const { Schema } = mongoose;

const TableSchema = new Schema({
  capacity: Number,
  filled: { type: Boolean, default: false },
  status: String,
  orders: OrderSchema
});

module.exports = TableSchema;
