'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');
const {User} = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    const {firstName, lastName} = req.body;
    let query = {};
    if (firstName) {
      query.firstName = firstName;
    }
    if (lastName) {
      query.lastName = lastName;
    }
    await User.update(query, {
      where: {uuid: req.user.uuid}
    });
    return res.status(200).send();
  } catch (err) {
    log.error(errorMessages.userEdit);
    next(err);
  }
};
