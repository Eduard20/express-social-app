const Sequelize = require('sequelize');
const {db} = require('../config');
const log = require('../utils/logger');
// Option 1: Passing parameters separately
const databaseService = new Sequelize(db.database, db.username, db.password, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true
  },
  port: 3306
});

(async function syncDatabase () {
  try {
    await databaseService.authenticate();
    log.info('Connection with the DB was successful');

    await databaseService.sync({
      // force: true,
    });
    log.info('All schemes were created successfully');
  } catch (err) {
    log.error(`Error when syncing database ${err}`);
    databaseService.close();
  }
})();

module.exports = databaseService;
