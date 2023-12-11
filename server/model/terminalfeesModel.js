const mongoose = require('mongoose');

var terminalfeesSchema = new mongoose.Schema({
    bodyno: {type: Number, require: true},
    fullname: {type: String, require: true},
    boundaries: {type: Number, require: true},
    dateofpayment: {type: Date, require: true},
}, {
    timestamps: true 
});

const TerminalFees = mongoose.model('terminalfees', terminalfeesSchema);

module.exports = TerminalFees;
