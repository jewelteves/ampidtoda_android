const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bodyno: {type: Number, require: true},
    fullname: {type: String, require: true},
    address: {type: String, require: true},
    gcashno: {type: Number, require: true},
    gcashname: {type: String, require: true},
    contactno: {type: Number, require: true},
    password: {type: String, require: true},
})
const Crudapi = mongoose.model('driver', schema);

module.exports = Crudapi

