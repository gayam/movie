'use strict';

var express = require('express');
var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/development');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connection is established to development');
});
require('./movies-model');
//Home page
app.get('/', function(req, res){
    res.send('Hello from home page');
});

var movieRouter = require('./movie-route');
//movies page
app.use('/movies', movieRouter);

app.listen(3000);