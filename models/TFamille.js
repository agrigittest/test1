"use strict";
var mongoose = require('mongoose');
var familleSchema = mongoose.Schema({
    CodeFamille: { type: Number, unique: true },
    libFamille: {
        type: String,
        set: trim()
    }
})

exports.schema = mongoose.model('TFamille', familleSchema);
exports.name = 'TFamille';