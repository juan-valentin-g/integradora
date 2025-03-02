const express = require('express');
const controller = require('../controllers/major');
const route = express.Router();
const path = 'major';

route.post(
    `/${path}`,
    controller.insertMajor
);

module.exports = route;
