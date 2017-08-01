"use strict";
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    CodeStock: Number,
    LibStock: String
})
exports.schema = mongoose.model('TStock', userSchema);
exports.name = 'TStock';