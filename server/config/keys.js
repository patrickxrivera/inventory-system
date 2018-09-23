const devKeys = require('./dev');
const prodKeys = require('./prod');
const { isProdEnv } = require('../utils/helpers');

module.exports = isProdEnv() ? prodKeys : devKeys;
