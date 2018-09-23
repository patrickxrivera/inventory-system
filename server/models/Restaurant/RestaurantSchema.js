const mongoose = require('mongoose');
const TableSchema = require('./TableSchema');

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: String,
  tables: TableSchema
});

module.exports = RestaurantSchema;
