import express from 'express';
const app = express();
import path from 'path';

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

app.get('/test', (req, res) => {
    res.send(JSON.stringify({test: "test"}))
});

app.listen(8000, ()=> console.log('App listening on port 8000'));