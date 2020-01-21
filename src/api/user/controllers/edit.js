'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');

module.exports = async (user) => {
  try {
    // TODO:edit user
  } catch (err) {
    log.error(errorMessages.userEdit);
  }
};
