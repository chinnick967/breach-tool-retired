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

module.exports.createUser = function(user, callback) {
    if (user.name != settings.config.adminUser.email) {
        mongo.db.collection("Users").findOne({email: user.email}, function(err, result) {
            if (err) {
                callback({status: false, message: "There was an error creating your account"});
            } else if (result) {
                callback({status: false, message: "This account already exists"});
            } else {
                bcrypt.hash(user.password, settings.config.bcrypt.salt, null, function(err, hash) {
                    if (!err) {
                        user.password = hash;
                        mongo.db.collection("Users").insertOne(user);
                        callback({status: true, message: "Account successfully created!"});
                    } else {
                        callback({status: false, message: "An error occurred when attempting to encrypt your password."});
                    }
                });
            }
        });
    } else {
        callback({status: false, message: "This account already exists"});
    }
}