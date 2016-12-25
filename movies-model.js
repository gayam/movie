'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

(function(){
var movieSchema = new Schema(
    {
        name : {
            type : String,
            required : 'movie name is required',
            trim : true
        },
        hero : {
            type : String,
            trim : true,
            default : ''
        },
        heroine : {
            type : String,
            trim : true,
            default : ''
        },
        director : {
            type : String,
            trim : true,
            default : ''
        },
        trailer : {
            type : String,
            required : 'Trailer link is required',
            trim : true
        },
        poster : {
            type : String,
            required : 'poster is required',
            trim: true
        }
    }
);

mongoose.model('movies', movieSchema);
})();