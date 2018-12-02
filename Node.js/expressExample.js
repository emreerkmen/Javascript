var fs = require('fs');
var p = require('./exportsDemo.js');
var express = require('express');
var path=require('path');

var app = express();

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    fs.readFile('home.html', function (err, data) {
        res.write(data)
        res.end('Sayfa Sonu');
        p('Home Controller');
    });
}

);

app.get('/admin',function(req,res){
    fs.readFile('admin.html',function(err,data){
        res.write(data);
        res.end('Sayfa Sonu');
        p('Admin Controller');
    })
});



app.listen(8080);
