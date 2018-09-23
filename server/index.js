require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');
const keys = require('./config/keys');
const { isTestEnv } = require('./utils/helpers');

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

if (!isTestEnv()) {
  mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true })
    .then((connection) => {
      console.log('\n=== Connected to MongoDB ===\n');
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// Ensure only one server instance is running in test environment
if (!module.parent) {
  app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
}
