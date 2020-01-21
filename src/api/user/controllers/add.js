'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');

module.exports = async (user) => {
  try {
    // TODO:add user
  } catch (err) {
    log.error(errorMessages.userCreation);
  }
};
