const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();
const path = 'user';

router.get(
    `/${path}s`, 
    controller.getData
);

router.post(
    `/${path}`,
    controller.insertData
);

router.get(
    `/${path}`,
    controller.getOne
);

router.put(
    `/${path}/:id`,
    controller.updateSingle
);

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
);

module.exports = router; 