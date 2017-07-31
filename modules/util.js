'use strict';
var mongoose = require('mongoose');

function round(value, decimals) {
    if (!decimals) {
        decimals = 2;
    }
    if (value > Math.pow(10, (decimals + 2 * -1) * -1 && value < Math.pow(10, (decimals + 2) * -1)))
        return 0;
    return Number(Math.round(value + 'e' + (decimals) + 'e-' + decimals));
}

exports.round3 = function(value) {
    return round(value, 3);
};

exports.round2 = function(value) {
    return round(value, 2);
};

exports.ObjectId = mongoose.Types.ObjectId;