var environment;
var configuration = require('config');
var bcrypt = require('bcrypt-nodejs');

module.exports.config = configuration.get(process.env.NODE_ENV);
module.exports.environment = process.env.NODE_ENV;