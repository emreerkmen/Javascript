var path = require('path');

module.exports.homeController = function (req, res) {
    console.log(res.deneme);
    //res.sendFile(path.join(__dirname, '../../home.html'));//'..' ile bi dış klasöre çıkıyoruz. dirname bulunduğu klasörün içine bakıyor.
    //artık view engine ile sayfayı render'layıp gönderiyoruz.
    //Controller'dan view'a veri gönderelim.
    var kisiler = ['Ahmet', 'Mehmet', 'Veli', 'Osman'];
    res.render('home', { mesaj: 'Merhaba ben controller', kisiler: kisiler });
};

module.exports.adminController = function (req, res) {
    //res.sendFile(path.join(__dirname, '../../admin.html'));
    res.render('admin');
};

