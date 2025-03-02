const express = require('express');
const controller = require('../controllers/category');
const router = express.Router();
const path = 'category';

router.post(
    `/${path}`,
    controller.insertCategory
)

module.exports = router;
