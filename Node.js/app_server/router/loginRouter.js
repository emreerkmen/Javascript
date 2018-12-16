var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controller/loginController');


router.get('/', ctrlLogin.index);

module.exports = router;