//var ctrlElektronik = require('./elektronikController');
var p = require('../../../Node.js/exportsDemo.js');
var path = require('path');
var ejslayouts = require('express-ejs-layouts');
var routeElektronik = require('./elektronikRouter');
var routeLogin = require('./loginRouter');


module.exports = function (app) {

    //Basit olarak her middleware request ve response üzerinde işleme yapan küçük ara yazılımlar gibi düşünülebilir.
    app.use(function (req, res, next) {//middleware--burda her router da çalışıcak mesela. Router'ın içine yazarak router bazlı çalışabilirsiniz.
        p("-----------------------------------");
        p('İlk çağırılan middleware;Ana module');
        p("url...." + req.originalUrl);
        p("time..." + Date.now());
        p("-----------------------------------");
        next();//sonraki ara yazılımın çağrılmasını sağlıyor.
    })

    // var homeController = function(req,res){
    //     // fs.readFile('home.html', function (err, data) {
    //     //     res.write(data)
    //     //     res.end('Sayfa Sonu');
    //     //     p('Home Controller');
    //     // });
    //     res.sendFile(path.join(__dirname, 'home.html'));
    // };

    // var adminController = function(req,res){
    //     // fs.readFile('admin.html',function(err,data){
    //     //     res.write(data);
    //     //     res.end('Sayfa Sonu');
    //     //     p('Admin Controller');
    //     // })
    //     res.sendFile(path.join(__dirname, 'admin.html'));
    // };

    //app.get('/',ctrlElektronik.homeController);

    //pp.get('/admin',ctrlElektronik.adminController);

    //Hangi görüntü motorunu kullandığımızı belirtiyoruz.
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    app.use(ejslayouts);


    //Expresss içinde gömülü bir adet module var o da static moldule'dür.
    //Üçüncü parti middleware'lar vardır.

    //EJS MVC'de controller ile view arasında bağlantı kuran module'dür. EJS bir view engine'dir(Görüntü Motoru).



    app.use('/login', routeLogin);
    app.use('/home', routeElektronik);

}