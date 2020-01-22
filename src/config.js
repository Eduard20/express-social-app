'use strict';

require('dotenv').config();
const {
  NODE_ENV,
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  JWT_SECRET
} = process.env;
const constants = require('./constants');
const nodeEnv = NODE_ENV || constants.app.environments.dev;
const port = PORT || 8080;

module.exports = {
  nodeEnv,
  logLevel: nodeEnv === constants.app.environments.dev ? constants.app.logLevels.debug : constants.app.logLevels.info,
  port,
  db: {
    username: DB_USERNAME || '',
    password: DB_PASSWORD || '',
    database: DB_DATABASE || ''
  },
  jwtSecret: JWT_SECRET || 'jwtsecret'
};
