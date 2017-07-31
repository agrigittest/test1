'use strict';
var mongoose = require('mongoose');
<<<<<<< HEAD
var articleStockSchema = mongoose.Schema({
    CodeArticle: { type: Number },
    CodeStock: { type: Number },
    Qte: { type: Number, default: 0 }
=======
var userSchema = mongoose.Schema({
    CodeArticle: Number,
    CodeStock: Number,
    Qte: {type: Number, default: 0}
>>>>>>> d5230b95f0c4c5bd632c982db00c1a78c608eeb6
})
exports.schema = mongoose.model('TArticleStock', articleStock);
exports.name = 'TArticleStock';