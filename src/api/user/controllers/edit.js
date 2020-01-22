'use strict';

const {errorMessages} = require('../../../texts');
const log = require('../../../utils/logger');
const {User} = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    const {firstName, lastName, male, age} = req.body;
    let query = {};
    if (firstName) {
      query.firstName = firstName;
    }
    if (lastName) {
      query.lastName = lastName;
    }
    if (male) {
      query.male = male;
    }
    if (age) {
      query.age = age;
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
