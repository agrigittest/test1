'use strict';
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    CodeArticle: Number,
    CodeStock: Number,
    Qte: {type: Number, default: 0}
})
exports.schema = mongoose.model('TArticleStock', userSchema);
exports.name = 'TArticleStock';