'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');

module.exports = async (req, res) => {
  try {

  } catch (err) {
    log.error(errorMessages.userEdit);
  }
};
