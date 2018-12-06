var path = require('path');
var controller = require('../controller/elektronikController');
var express = require('express');
var router = express.Router();

router.get('/', controller.homeController);
router.get('/admin', controller.adminController);

module.exports = router;