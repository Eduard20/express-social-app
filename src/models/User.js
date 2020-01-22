const {Sequelize} = require('sequelize');
const databaseService = require('../db/connection');

const User = databaseService.define('users', {
  firstName: {type: Sequelize.STRING, allowNull: false},
  lastName: {type: Sequelize.STRING},
  imageUri: {type: Sequelize.STRING},
  salt: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
  token: {type: Sequelize.STRING},
  uuid: { type: Sequelize.STRING },
  sex: { type: Sequelize.STRING },
  date: { type: Sequelize.DATE }
}, {});

module.exports = User;
