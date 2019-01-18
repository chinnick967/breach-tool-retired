import express from 'express';
const app = express();
import path from 'path';

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

app.get('/lists', (req, res) => {
    /* Add news lists here, import above first */
    var Lists = {
        accounts: accounts.apiList
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(Lists));
});

/* API response imports */
import apiResponse from './server/api-response/response.js';

app.post('/test', (req, res) => {
    res.send(apiResponse.fakeResponse(req.body));
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
    console.log(user);
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

/* endpoint for health check from load balancer */
app.get('/health', (req, res) => {
    res.send('');
});

app.listen(8000, ()=> console.log('App listening on port 8000'));