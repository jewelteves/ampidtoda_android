
const axios = require('axios');


exports.records_user = (req, res) => { 
    axios.get('https://ampidtoda.onrender.com/api/users-records')
    .then(function (response){
        res.render('indexSearchData', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.boundaries_user = (req, res) => { 
    axios.get('https://ampidtoda.onrender.com/api/users-boundaries')
    .then(function (response){
        res.render('indexBoundaries', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.terminal_user = (req, res) => { 
    axios.get('https://ampidtoda.onrender.com/api/users-terminal')
    .then(function (response){
        res.render('indexTerminal', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.membership_user = (req, res) => { 
    axios.get('https://ampidtoda.onrender.com/api/users-membership')
    .then(function (response){
        res.render('indexMembership', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.add_user = (req, res) => {
    res.render(`add_user`);
}

exports.login_user = (req, res) => {
    res.render(`login_user`);
}
