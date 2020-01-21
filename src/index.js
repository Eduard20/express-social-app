'use strict';

/**
 * Module Dependencies
 */

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const log = require('./utils/logger');
const config = require('./config');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const {checkHttpOptions} = require('./middlewares');

/**
 * Other Middleware
 */

app.disable('x-powered-by');
app.use(checkHttpOptions);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use('/api', routes);

/**
 * Middleware For Not Found
 */

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Production error handler
 */

app.use((err, req, res, next) => {
  log.error(err);
  res.status(err.status || 500);
  res.json({
    errors: [{
      msg: err.message
    }]
  });
});

/**
 * Application listening on PORT
 */

app.listen(config.port, log.info(`Node.js server is running at http://localhost:${config.port} in ${config.nodeEnv} mode with process id ${process.pid}`));

/**
 * Checking Uncaught Exceptions
 */

process.on('uncaughtException', err => {
  log.error(new Date().toUTCString() + ' uncaughtException:', err.message);
  log.error(err.stack);
  process.exit(1);
});

/**
 * Checking Unhandled Rejection
 */

process.on('unhandledRejection', err => {
  log.error(new Date().toUTCString() + ' unhandledRejection:', err.message);
  log.error(err.stack);
  process.exit(1);
});
