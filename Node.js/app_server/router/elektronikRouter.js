var path = require('path');
var controller = require('../controller/elektronikController');
var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
    res.deneme='İkinci çağırılan middleware.; RouterModule';
    next();
});

router.get('/', controller.homeController);
router.get('/admin', controller.adminController);

module.exports = router;