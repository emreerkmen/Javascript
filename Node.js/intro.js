//Node'ta module'ler bir biri ile ilişkili kütüphaneler gibi düşünebiliriz.
//Şimdi bir web uygulaması oluşturmak için http module'nü çağıracağız.
var http = require('http');
var fs = require('fs');
var express = require('express');
//Şimdi de kendi yazdığımız bir modeule olan ilkmodule'u kullanıcaz.
var ilkmodule = require('./ilkmodule.js');
var p = require('./exportsDemo.js');

var app = express();

app.get('/',function(req,res){
    fs.readFile('home.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write();
        res.end('Sayfa Sonu');
        p('Home Controller');
    });
})

var yonlendirici = new Object();

var homeController = function (req, res) {
    fs.readFile('home.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end('Sayfa Sonu');
        p('Home Controller');
    });
};

var adminController = function (req, res) {
    fs.readFile('admin.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end('Sayfa Sonu');
        p('Admin Controller');
    });
};

yonlendirici['/']=homeController;
yonlendirici['/admin']= adminController;

//CreateServer  ile bir web sunucusu oluşturuyoruz. Requst ile web sunucusundan ne istiyosak onu iletiyoruz. Ana sayfaya tıkladığımızda yine request oluşturuyoruz web sunucusu için mesela.
http.createServer(function (request, response) {
    //200 yapılan isteğin legal, başarılı bir istek oldupunu temsil eder. Content-Type kısmında ise response'ın html mi jason mı olduğunu söylüyoruz.
    //response.writeHead(200,{'Content-Type':'test/html'})
    //client'a ne vereceğimizi aşağıdaki şekilde tanımlıyoruz.--Çalıştırmak için alttaki, kodun olması yeterli.

    if(request.url in yonlendirici){
        yonlendirici[request.url](request,response);
    }


    if (request.url == "/jsonExample") {
        response.writeHead(200, { 'Content-Type': 'application/json' });//Json datası gönderiğimizi haber veriyoruz client'a
        response.write(JSON.stringify({ name: 'Emre', lastName: 'Erkmen' }));//Json.stringify ile bu datanın javascript değil json data foramtına çeviriyoruz.Json.stringify'yapmazsak bu data javascript datası olucaktı.
        response.end('Sayfa sonu');
        p('Json Example');
    }
}).listen(8080)//8080 portu ile dinliyoruz.// portu dinlemeyi kaptmak için cmd de node intro.js yazdıktan sonra ve dinleme başladıktan sonra ctrl+c yapıyoruz.

ilkmodule.informaiton('Çalışıyor...');
/* npm sık kullanılan command line
npm install bootstrap // istediğimiz module'leri böyle ekliyoruz. Ekledikten sonra package-lock.json isimli ve npm konfigirasyon amaçlı bir dosya indirildi. Ancak uyugulamalarımıza böyle başlamıyacaz. Bunu silip kendimiz bir tane oluşturucaz.
npm init -y//Hazır oalrak bir package.json kurduruyoruz. Daha sonra module'leri(bootstrap gibi) indiriyoruz.
npm install jasmine//Bir unit test module'üdür. Ama bunu dependencies'ten devDependencies'in altına yazmamız gerekir package.json'da. Böylece uygulamyı yayınladığımız zaman gereksiz module'ler ile şişirmemiş oluruz. Uygulamayı çalıştırıcak modelu'lerin olması yeterlidir.
npm uninstall jasmine//Module'ü silme
npm install jasmine --save//Dependencies'e atar
npm install jasmine --save-dev//DEvDependencies'e atar.
npm install bootstrap@3.3.7//belirli versiyonunu yükleme
npm outdated//bulunan paketleri npmdeki versiyonları ile karşılaştırır.
npm update//Bulunan paketleri güncelleme
npm install -g nodemon//dosyada bi değişiklik olduğunda yayını kesip tekrar başlatıyor. Sürekli ctrl+c yapıp sayfayı refresh'lememize gerek yok. -g heryere yüklüyoruz.
npm install // package.jsondaki module'leri otamtikmen
*/