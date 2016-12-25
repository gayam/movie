'use strict';

var express = require('express');

var movieRoute = express.Router();
var movies = require('./movie');

movieRoute.get('/', moviesList.list);

module.exports = movieRoute;