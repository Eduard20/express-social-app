const { Sequelize } = require('sequelize');
const databaseService = require('../db/connection');
const User = databaseService.define('users', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  imageUri: {
    type: Sequelize.STRING
  }
}, {
  // options
});

module.exports = User;
