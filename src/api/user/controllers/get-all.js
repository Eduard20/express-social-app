'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');
const {User} = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['firstName', 'lastName', 'imageUri', 'uuid'] // uuid added just for debugging purposes
    });
    return res.send({
      result: {
        users
      }
    });
  } catch (err) {
    log.error(errorMessages.userCreation);
    next(err);
  }
};
