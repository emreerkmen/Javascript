//Herşeyi export ile dışarı çıkartabiliriz.
var city = "Ankara";
//module.exports=city;

module.exports = function sayHello() {
    console.log('Hello');
}