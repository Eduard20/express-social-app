'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');
const {User} = require('../../../models');
const {generateSalt, encryptPassword, generateToken} = require('../../../utils');
const uuidv4 = require('uuid/v4');

module.exports = async (req, res, next) => {
  try {
    const user = User.build(req.body);
    user.salt = generateSalt();
    user.password = encryptPassword(user.password, user.salt);
    user.uuid = uuidv4();
    user.token = generateToken({uuid: user.uuid});
    await user.save();
    return res.status(201).send({
      result: {
        token: user.token
      }
    });
  } catch (err) {
    log.error(errorMessages.userCreation);
    next(err);
  }
};
