var fs = require('fs');
var p = require('./exportsDemo.js');
var express = require('express');
var path = require('path');
var db=require('./app_server/models/db');
var http =require('http');



http.createServer(function(req,res){
    res.writeHead(200);
    res.write("Hello");
    res.end();
    p(res);
}).listen(8081);

var app = express();


app.use('/public', express.static(path.join(__dirname, 'public')));

require('./app_server/router/routerManager.js')(app);

var Kullanici = require('./app_server/models/kullanici');

/*var yeniKullanici = new Kullanici({
    ad: 'emre',
    soyad: 'erkmen',
    kullanıcıAdi: 'emreerkmen1',
    sifre: '123456'
});

yeniKullanici.save(function(err){
    if(err){
        console.log('hata: '+err);
    }else {
        console.log('kullanici kaydedildi');
    }
});*/

app.listen(8080);
