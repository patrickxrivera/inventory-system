const express = require('express');
const passwordController = require('../controllers/password');

const apiRouter = express.Router();

apiRouter.get('/passwords', passwordController.getPasswords);

module.exports = apiRouter;
