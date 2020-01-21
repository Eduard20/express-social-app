'use strict';

const {
  NODE_ENV,
  PORT
} = process.env;
const constants = require('./constants');
require('dotenv').config();
const nodeEnv = NODE_ENV || constants.app.environments.dev;
const port = PORT || 8080;

module.exports = {
  nodeEnv,
  logLevel: nodeEnv === constants.app.environments.dev ? constants.app.logLevels.debug : constants.app.logLevels.info,
  port
};
