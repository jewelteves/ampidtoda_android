
const mongoose = require('mongoose');

var membershipfeesSchema = new mongoose.Schema({
    bodyno: {type: Number, require: true},
    fullname: {type: String, require: true},
    boundaries: {type: Number, require: true},
    dateofpayment: {type: Date, require: true},
}, {
    timestamps: true 
});

const MembershipFees = mongoose.model('membershipfees', membershipfeesSchema);

module.exports = MembershipFees;
