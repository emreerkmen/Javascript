var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controller/loginController');

router.use(function(req,res,next){
    res.result='sefefefsef';
    next();
});

router.get('/', ctrlLogin.indexGet);
router.post('/', ctrlLogin.indexPost);
router.get('/signup', ctrlLogin.signupGet);
router.post('/signup', ctrlLogin.signupPost);
router.get('/userlist', ctrlLogin.userListesi);
router.get('/userDelete/:userid', ctrlLogin.userDelete);//Bu url'in parametre alacağınızı bildiriyoruz.

module.exports = router;