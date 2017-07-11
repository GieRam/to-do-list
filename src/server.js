'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const os = require("os");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', express.static('../web'));

app.post('/', function (req, res) {
    const email = req.body['email'];
    if (!email) {
        res.status(400);
        res.send('Email in body required');
        return;
    }

    fs.appendFileSync('../storage/subscribers.txt', req.body['email'] + os.EOL);

    res.status(200);
    res.send('Success');
    return;
});

app.get('/subscribers', function (req, res) {
    const key = req.query.key;
    if (key != '7e2a6566384e635c47283f2f43') {
        res.status(400);
        res.send('Unauthorized');
        return;
    }

    res.status(200);
    res.send(fs.readFileSync('../storage/subscribers.txt','utf8'));
    return;
});

app.listen(8081);
console.log('app is listening on port: 8081');
