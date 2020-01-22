'use strict';

const crypto = require('crypto');

/**
 * @description generates random string of characters i.e salt
 * @param {number} length - Length of the random string.
 * @returns {Query|Buffer|Array.<T>|string|Blob|ArrayBuffer}
 */
module.exports = (length = 64) => crypto.randomBytes(Math.ceil(length / 2))
  .toString('hex')
  .slice(0, length);
