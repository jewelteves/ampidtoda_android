const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bodyno: {type: String, require: true},
    fullname: {type: String, require: true},
    address: {type: String, require: true},
    contactno: {type: String, require: true},
    password: {type: String, require: true},
})
const Crudapi = mongoose.model('driver', schema);

module.exports = Crudapi

