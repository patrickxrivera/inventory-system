const express = require('express');
const testController = require('../controllers/test');

const apiRouter = express.Router();

apiRouter.get('/', testController.helloWorld);

module.exports = apiRouter;
