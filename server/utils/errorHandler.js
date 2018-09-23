const code = require('./statusCodes');

module.exports = (res, message) => {
  res.status(code.USER_ERROR).send({ error: { message } });
};
