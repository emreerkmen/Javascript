var fs = require('fs');
var p = require('./exportsDemo.js');
var express = require('express');
var path=require('path');

//var ctrlElektronik = require('./elektronikController');
var elektronikRouter = require('./app_server/router/elektronikRouter.js');


var app = express();

app.use('/public',express.static(path.join(__dirname, 'public')));

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

//Basit olarak her middleware request ve response üzerinde işleme yapan küçük ara yazılımlar gibi düşünülebilir.
app.use(function(req,res,next){//middleware--burda her router da çalışıcak mesela. Router'ın içine yazarak router bazlı çalışabilirsiniz.
    p('İlk çağırılan middleware;Ana module');
    p("url...."+req.originalUrl);
    p("time..."+Date.now());
    next();//sonraki ara yazılımın çağrılmasını sağlıyor.
})
//Expresss içinde gömülü bir adet module var o da static moldule'dür.
//Üçüncü parti middleware'lar vardır.

app.use('/home',elektronikRouter);

app.listen(8080);
