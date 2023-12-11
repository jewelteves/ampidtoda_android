
const express = require('express');
const route = express.Router();


const services = require('../services/render');
const controller = require('../controller/controller');


// LOGIN, PASSWORD, REGISTER
route.get('/add-user', services.add_user);
route.post('/api/users-create', controller.create);

route.get('/', services.login_user);
route.post('/api/users-login', controller.login);


//TERMINAL, BOUNDARIES, MEMBERSHIP
route.get('/records-user', services.records_user);
route.get('/api/users-records', controller.records);

route.get('/boundaries-user', services.boundaries_user);
route.get('/terminal-user', services.terminal_user);
route.get('/membership-user', services.membership_user);

route.get('/api/users-boundaries', controller.boundaries);
route.get('/api/users-terminal', controller.terminal);
route.get('/api/users-membership', controller.membership);

module.exports = route;