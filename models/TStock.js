"use strict";
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({ CodeArticle:Number, CodeStock: Number,Qte: Number })
exports.schema = mongoose.model('TStock', userSchema);
exports.name = 'TStck';