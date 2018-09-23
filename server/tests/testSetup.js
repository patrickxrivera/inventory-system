// Access to env variables
require('dotenv').config();

const mongoose = require('mongoose');

module.exports = () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/inventory-system-test', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
    });
    mongoose.connection.once('open', () => done()).on('error', (error) => {
      console.warn('Warning', error);
    });
  });
};
