'use strict';

const {User} = require('../../../models');
const {Op} = require('sequelize');

module.exports = async (req, res, next) => {
  try {
    const { ageFrom, ageTill, sex } = req.query;
    let where = {};
    if (ageFrom) {
      where.age = {[Op.gte]: parseInt(ageFrom)};
    }
    if (ageTill) {
      where.age = {...where.age, [Op.lte]: parseInt(ageTill)};
    }
    if (sex) {
      where.sex = sex;
    }
    const attributes = ['firstName', 'lastName', 'imageUri', 'uuid', 'age', 'sex'];
    const users = await User.findAll({
      attributes,
      where
    });
    return res.send({
      result: {
        users
      }
    });
  } catch (err) {
    next(err);
  }
};
