import express from 'express';
const app = express();
import path from 'path';
var https = require('https');
var http = require('http');
var fs = require('fs');
var settings = require('./server/settings/settings.js');

var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'somerandonstuffs',
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 604800000
    }
}));

var Logs = require('./server/logging/logging.js');

/* Breach API URL */
const url = "";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/scripts', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/scripts.bundle.js'));
});

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/styles.bundle.js'));
});

app.get('/assets/:image', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/assets/' + req.params.image)); 
});

/* API imports */
import accounts from './server/api/accounts.js';
import inventory from './server/api/inventory.js';

app.get('/lists', (req, res) => {
    /* Add news lists here, import above first */
    var Lists = {
        accounts: accounts.apiList,
        inventory: inventory.apiList
    };
    console.log("LISTS");
    console.log(Lists);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(Lists));
});

/* API response imports */
import apiResponse from './server/api-response/response.js';
import { fstat } from 'fs';

app.post('/apiRequest', (req, res) => {
    apiResponse.requestApiCall(req.body, (response) => {
        res.send(response);
    });
});

/* API user login */
var users = require('./server/db/users.js');

app.post('/sign-in', (req, res) => {
    users.validateUser(req.body.email, req.body.password, function(result) {
        if (result) {
            req.session.user = result.email;
            res.send(JSON.stringify(result));
        } else {
            res.send(JSON.stringify({error: true, message: "Incorrect login information. Please try again"}));
        }
    });
});

app.post('/create-account', (req, res) => {
    var user = {
        email: req.body.Email,
        password: req.body.Password,
        find: req.body.find,
        edit: req.body.edit,
        admin: req.body.admin,
        createdAt: new Date()
    }
    users.createUser(user, function(result) {
        res.send(result);
    });
});

app.get('/get-users', (req, res) => {
    users.getUsers(function(result) {
        res.send(JSON.stringify({users: result}));
    });
});

app.post('/delete-account', (req, res) => {
    users.findUser(req.session.user, function(result) {
        if (result.admin) {
            if (req.session.user == req.body.user) {
                res.send(JSON.stringify({message: "You cannot delete your own account."}))
            } else {
                users.deleteAccount(req.body.user, function(result) {
                    res.send(JSON.stringify({message: result.message}));
                });
            }
        } else {
            res.send(JSON.stringify({message: "You do not have the permissions to delete a user's account. Please see a system admin. Current admin email is: " + settings.config.adminUser.email}));
        }
    });
});

app.post('/change-password', (req, res) => {
    users.findUser(req.session.user, function(result) {
        if (result.admin) {
            users.changePassword(req.body.user, req.body.password, function(result) {
                res.send(JSON.stringify({message: result.message}));
            });
        } else {
            res.send(JSON.stringify({message: "You do not have the permissions to edit a user's password. Please see a system admin. Current admin email is: " + settings.config.adminUser.email}));
        }
    });
});

app.get('/check-session', (req, res) => {
    if (req.session.user) {
        req.session.user = req.session.user; // refresh session
        users.findUser(req.session.user, function(result) {
            if (result) {
                res.send(JSON.stringify(result));
            } else {
                res.send(JSON.stringify({error: true, message: "Unable to find this user account. This account may have been deleted."}));
            }
        });
    } else {
        res.send(JSON.stringify({error: true, message: "Session doesn't exist"}));
    }
});

app.get('/clear-session', (req, res) => {
    if (req.session.user) {
        req.session.destroy();
    } else {
        res.send(JSON.stringify({error: true, message: "Session doesn't exist"}));
    }
});

app.get('/get-logs', (req, res) => {
    Logs.fetchLogs(function(result) {
        if (result) {
            res.send(JSON.stringify({logs: result}));
        } else {
            res.send(JSON.stringify({error: true, message: "An error occurred when attempting to retrieve the Request Logs."}));
        }
    });
});

/*process.on('uncaughtException', function (err) {
    console.log(err);
}); */

/* endpoint for health check from load balancer */
app.get('/health', (req, res) => {
    res.send('');
});

if (settings.config.server.protocol == 'http') {
    app.listen(8000, () => console.log("Server started on port 8000"));
} else {
    var options = {
        key: fs.readFileSync(settings.config.server.ssl_key),
        cert: fs.readFileSync(settings.config.server.ssl_cert)
    };
    var server = https.createServer(options, app).listen(8000, function(err) {
        if (err) {
            console.log("ERROR");
            console.log(err);
        }
        console.log("Server started on port 8000 with SSL");
    });
}
