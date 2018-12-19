var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullanıcıSchema = new Schema({
    ad:String,
    soyad:String,
    kullanıcıAdi: {type: String, required: true, unique: true},
    sifre: {type: String, required: true}

});

var Kullanici = mongoose.model('Kullanici',kullanıcıSchema);

module.exports = Kullanici;