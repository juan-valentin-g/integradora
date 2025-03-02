const express = require('express');
const controller = require('../controllers/tools');
const router = express.Router();
const path = 'tool';

router.get(
    `/${path}s`, 
    controller.getData
)

router.get(
    `/${path}/:id`,
    controller.getOne
)

router.post(
    `/${path}`,
    controller.insertTool
)

router.put(
    `/${path}/:id`,
    controller.updateTool
)

router.delete(
    `/${path}/:id`,
    controller.deleteTool
)

module.exports = router; 