'use strict';

const crypto = require('crypto');

/**
 * @description encrypt Password with sha256 algorithm
 * @param {string} password - user password
 * @param {string} salt - individual generated salt
 * @returns {*|PromiseLike<ArrayBuffer>}
 */
module.exports = (password, salt) => crypto.createHmac('sha256', salt)
  .update(password)
  .digest('hex');
