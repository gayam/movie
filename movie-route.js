'use strict';

var express = require('express');

var movieRoute = express.Router();
var moviesList = require('./movie');

movieRoute.get('/', moviesList.list);

module.exports = movieRoute;