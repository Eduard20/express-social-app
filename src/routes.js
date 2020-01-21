const app = require('express')();
const routes = require('./api');

app.use('/users', routes.UserAPI);

module.exports = app;
