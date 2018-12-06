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

app.use('/home',elektronikRouter);

app.listen(8080);
