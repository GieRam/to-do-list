'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/todoapp');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Routes
const taskRoutes = require('./routes/task_routes');
app.use('/api/tasks/', taskRoutes);

// Start the server
app.listen(8081);
console.log('app is listening on port: 8081');
