const mongoose = require('mongoose');

var boundariesSchema = new mongoose.Schema({
    bodyno: {type: Number, require: true},
    fullname: {type: String, require: true},
    boundaries: {type: Number, require: true},
    dateofpayment: {type: Date, require: true},
}, {
    timestamps: true 
});

const Boundaries = mongoose.model('boundaries', boundariesSchema);

module.exports = Boundaries;
