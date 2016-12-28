'use strict';
var mongoose = require('mongoose');
var movieModel = mongoose.model('movies');
var moviesList = {
    list : function(req, res){
        movieModel.find(function(err, result){
            if(err){
                console.log('could not get the list of movies');
                res.status(500);
                res.send('error: could not get the list of movies');
            }
            else{
                res.send('data comes here');
            }
        });
    }
};

module.exports = moviesList;