'use strict';

var mongoose = require('mongoose');

const round = MODULE("util").round3;

var articleSchema = mongoose.Schema({
    codeArticle: { type: Number, unique: true },
    libArticle: { type: String, trim: true },
    prix: { type: Number, set: round },
    codeFamille: { type: ObjectId, ref: 'TFamille' }
});

exports.schema = mongoose.model('TArticle', articleSchema);
exports.name = 'TArticle';