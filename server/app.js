const express = require('express');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRouter = require('./routes');

const app = express();

app.use(helmet());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', apiRouter);

module.exports = app;
