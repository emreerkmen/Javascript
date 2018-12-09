var path = require('path');

module.exports.homeController = function (req, res) {
    console.log(res.deneme);
    res.sendFile(path.join(__dirname, '../../home.html'));//'..' ile bi dış klasöre çıkıyoruz. dirname bulunduğu klasörün içine bakıyor.
};

module.exports.adminController = function (req, res) {
    res.sendFile(path.join(__dirname, '../../admin.html'));
};

