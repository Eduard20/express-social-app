'use strict';

const generateToken = require('./generators/generate-token');
const generateSalt = require('./generators/generate-salt');
const generatePassword = require('./generators/generate-password');
const encryptPassword = require('./encrypt-password');

module.exports = {
  generateToken,
  encryptPassword,
  generatePassword,
  generateSalt
};
