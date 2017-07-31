'use strict';

var mongoose = require('mongoose');

var round = MODULES("util").round;

var articleSchema = mongoose.Schema({
    codeArticle: { type: Number, unique: true },
    libArticle: { type: String, trim: true },
    prix: { type: Number, set: round },
    codeFamille: { type: ObjectId, ref: 'TFamille' }
});

exports.schema = mongoose.model('TArticle', articleSchema);
exports.name = 'TArticle';