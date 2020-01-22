'use strict';

const {User} = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    await User.update({
      imageUri: req.file.filename
    }, {where: {uuid: req.user.uuid}});
    return res.status(201).end();
  } catch (err) {
    next(err);
  }
};
