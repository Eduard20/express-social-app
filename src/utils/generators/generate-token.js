'use strict';

const jwt = require('jsonwebtoken');
const config = require('../../config');

/**
 * @description generates JWT with provided data and secret
 * @param {*} data
 * @returns {*}
 */
module.exports = data => jwt.sign(data, config.jwtSecret);
