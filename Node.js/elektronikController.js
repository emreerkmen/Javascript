var path=require('path');
module.exports.homeController = function(req,res){
    res.sendFile(path.join(__dirname, 'home.html'));
};

module.exports.adminController = function(req,res){
    res.sendFile(path.join(__dirname, 'admin.html'));
};