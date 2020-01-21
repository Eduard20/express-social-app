'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');
const {User} = require('../../../models');

module.exports = async (user) => {
  try {
    await User.create(user);
  } catch (err) {
    log.error(errorMessages.userCreation);
  }
};
