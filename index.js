import express from 'express';
const app = express();
import path from 'path';

var session = require('express-session');
var db = require('./server/db/connect.js');

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

app.get('/check-session', (req, res) => {
    if (req.session.user) {
        req.session.user = req.session.user; // refresh session
        users.findUser(req.session.user, function(result) {
            res.send(JSON.stringify(result));
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

app.listen(8000, ()=> console.log('App listening on port 8000'));