//Node'ta module'ler bir biri ile ilişkili kütüphaneler gibi düşünebiliriz.
//Şimdi bir web uygulaması oluşturmak için http module'nü çağıracağız.
var http = require('http');
//Şimdi de kendi yazdığımız bir modeule olan ilkmodule'u kullanıcaz.
var ilkmodule = require('./ilkmodule.js');
var sayHello=require('./exportsDemo.js');

//CreateServer  ile bir web sunucusu oluşturuyoruz. Requst ile web sunucusundan ne istiyosak onu iletiyoruz. Ana sayfaya tıkladığımızda yine request oluşturuyoruz web sunucusu için mesela.
http.createServer(function(request,response){
    //200 yapılan isteğin legal, başarılı bir istek oldupunu temsil eder. Content-Type kısmında ise response'ın html mi jason mı olduğunu söylüyoruz.
    //response.writeHead(200,{'Content-Type':'test/html'})
    //client'a ne vereceğimizi aşağıdaki şekilde tanımlıyoruz.--Çalıştırmak için alttaki, kodun olması yeterli.
    if (request.url=="/admin"){
        response.write('ooo kanka admin sayfaya geldin. ');
    }else{
        response.write('ana sayfaya gönderiyorum seni canım. ');
    }
    response.end('Sayfa sonu');
}).listen(8080)//8080 portu ile dinliyoruz.// portu dinlemeyi kaptmak için cmd de node intro.js yazdıktan sonra ve dinleme başladıktan sonra ctrl+c yapıyoruz.

ilkmodule.fault('HATA!!!!');
console.log(sayHello());