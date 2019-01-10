var settings = require('../settings/settings.js');
var mongo = require('./connect.js');
var bcrypt = require('bcrypt-nodejs');

module.exports.validateUser = function(email, password, callback) {
    // validate with email/password
    mongo.db.collection("Users").findOne({email: email}, function(err, result) {
        if (!err && result) {
            bcrypt.compare(password, result.password, function(err, check) {
                if (check) {
                    callback(result);
                } else {
                    callback(false);
                }
            });
        } else {
            callback(false);
        }
    });
}

module.exports.findUser = function(email, callback) {
    // Find the User's info
    mongo.db.collection("Users").findOne({email: email}, function(err, result) {
        if (!err && result) {
            callback(result);
        } else {
            callback(false);
        }
    });
}