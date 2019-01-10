var settings = require('../settings/settings.js');
var bcrypt = require('bcrypt-nodejs');
const saltRounds = settings.salt;

/* Connect to Mongodb */
var mongo = require("mongodb");
var db;

mongo.connect(settings.config.mongo.url, function(err, client) {
    if (!err) {
        db = client.db('breach-cs-site');
        module.exports.db = db;
        console.log("Connected to Mongodb");
        // create admin user from config
        var admin = {
            email: settings.config.adminUser.email,
            password: settings.config.adminUser.password,
            role: "admin"
        }
        bcrypt.hash(admin.password, settings.config.bcrypt.salt, null, function(err, hash) {
            if (err) {
                console.log("Unable to hash Admin Password");
                console.log(err);
                process.exit(1);
            }
            admin.password = hash;
            db.collection("Users").update({email: settings.config.adminUser.email}, admin, {upsert: true}, function(err, res) {
                if (!err) {
                    console.log("Application admin user created. See admin login info under /config/default.json");
                } else {
                    console.log("Error setting up Admin user after connecting to Mongodb");
                }
            });
        });
    } else {
        console.log("Connection to Mongodb failed: " + err);
        process.exit(1);
    }
});