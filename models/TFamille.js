var mongoose = require('mongoose');
var familleSchema = mongoose.Schema({
    CodeFamille: String,
    LibFamille: String
})

exports.schema = mongoose.model('TFamille', familleSchema);
exports.name = 'TFamille';