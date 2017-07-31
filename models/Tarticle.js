'use strict';

var mongoose = require('mongoose');
const ObjectId = MODULE("util").ObjectId;
const round = MODULE("util").round3;

var articleSchema = mongoose.Schema({
    codeArticle: { type: Number, unique: true },
    libArticle: { type: String, trim: true },
    prix: { type: Number, set: round },
    codeFamille: { type: ObjectID, ref: 'TFamille' }
});

exports.schema = mongoose.model('TArticle', articleSchema);
exports.name = 'TArticle';