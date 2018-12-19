var mongoose=require('mongoose');
//

mongoose.Promise = require('bluebird');

//mongodb'nin url bağlantısı => socket bğlantısı olduğu için
var mongoDB = 'mongodb://localhost/appdb';

mongoose.connect(mongoDB,{ useNewUrlParser: true },function(err){
    if (err){
        console.log('mongoose hatasi: ' + err);
    }else{
        console.log('mongoose bağland: ' + mongoDB);
    }
})