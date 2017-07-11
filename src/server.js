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
        res.send('');
    }

    fs.appendFileSync('../storage/subscribers.txt', req.body['email'] + os.EOL);

    res.status(200);
    res.send('Success');
});

app.listen(8081);
console.log('app is listening on port: 8081');
