var Kullanici = require('../models/kullanici');

/*var yeniKullanici = new Kullanici({
    ad: 'emre',
    soyad: 'erkmen',
    kullanıcıAdi: 'emreerkmen1',
    sifre: '123456'
});*/



module.exports.indexGet = function (req, res) {
    res.render('login');
}

module.exports.indexPost = function (req, res) {
    console.log(req.body);
    res.render('login', { username: req.body.username, password: req.body.password });
}

module.exports.signupGet = function (req, res) {
    res.render('signup');
}

module.exports.signupPost = function (req, res) {
    console.log(req.body);
    console.log(res.result);

    var yeniKullanici = new Kullanici({
        ad: req.body.name,
        soyad: req.body.surname,
        kullaniciAdi: req.body.username,
        sifre: req.body.password,
        email: req.body.email
    });

    yeniKullanici.save(function (err) {
        if (err) {
            console.log('hata: ' + err);
            res.result = 'hata:' + err;
            console.log(res.result);
            res.render('signup', { mongoDbResult: res.result })
        } else {
            console.log('kullanici kaydedildi');
            res.result = 'kullanici kaydedildi';
            //res.render('signup', { mongoDbResult: res.result })
            res.redirect('/login/userlist');// '/' ile sayfanın root'una inip ordan gitmeye başlıyor.
        }
    });
    console.log(res.result);
    ;
};

module.exports.userListesi = function (req, res) {
    Kullanici.find(function (err, result) {
        //console.log(result);
        res.render('userlist', { kullanicilar: result });
    });
}

module.exports.userDelete = function (req, res) {
    console.log(req.params.userid);
    Kullanici.findOneAndDelete({ _id: req.params.userid }, function (err, result) {
        if (err) {
            console.log('Silemedik, Hata: ' + err);
        }
        console.log(result);
        console.log('Başarıyla Silindi.');
        res.redirect('/login/userlist');

    })

}