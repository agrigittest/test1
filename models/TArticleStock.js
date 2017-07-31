'use strict';
var mongoose = require('mongoose');
var articleStockSchema = mongoose.Schema({
    CodeArticle: { type: Number },
    CodeStock: { type: Number },
    Qte: { type: Number, default: 0 }
});
exports.schema = mongoose.model('TArticleStock', articleStockSchema);
exports.name = 'TArticleStock';