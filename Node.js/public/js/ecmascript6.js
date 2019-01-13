var sayi = 10 ;
var sehir ='Ankara';

console.log(sayi);
console.log(sehir);

var sehir = 'İstanbul';

console.log(sayi);
console.log(sehir);

let il = 'İzmir'; //let ile il değişkenini bir daha tanımlanmıyor. 

console.log(il);

il = 'Bursa';


function p(string){
    console.log(string);
};

p(il);

function scope (){
    var isim = 'Emre';
    p(isim);
};

scope();
//p(isim);       //isim değişkeni scope içinde tanımlandığı için scope dışarsında kullanılmıyor.

for (var i=1; i<10;i++){

};

p(i);//i ye for dışında ulaşabiliyoruz. Ama aslında ulaşamamız lazım.

for (let i=1; i<10;i++){

};//bunu  için i var ile değil 'let ' ile tanımlamamız gerekiyor.

const hayvan = 'Tavşan';

//hayvan = 'Fare';//const değişkenler bir daha değiştirilemez sabit değişkenlerdir.

const sehirler = ["İstanbul","Ankara"];

p(sehirler);

sehirler.push("İzmir");//const olmasına rağmen değeri değiştirdik. Çünkü değişkenin referans ettiği yeri değiştirmiyoruz. Aynıreferasn ettiği yer eyeni bir değer ekliyoruz sadece.


p(sehirler);

//sehirler = ["Bursa","Mardin"];//Burda sıkıntı olur çünkü referans ettiği yer değişir değişkenin. Diziler objeler fonksiyonlar hep referans tipli değişkenleridr. Değer tipli değişkler değildir.

//İleri seviye fonksiyonlar//

var pfonk = function p(){
    console.log("Merhaba");
};

pfonk();

const pfonkconst = () => {
    console.log("Merhaba Const");
};

pfonkconst();

const pfonkconst2 = () => console.log("Merhaba Const 2");


pfonkconst2();

const pfonkconst3 = (mesaj) => {
    console.log("Merhaba Const"+mesaj);
};

pfonkconst3("Vaov Be!!!");

const topla = (sayi1,sayi2) => {
    return p(sayi1+sayi2); 
};

topla(1,2);


//İleri diziler//

const dizi =[1,2,3,4];

dizi.forEach(sayi =>{
    //p(sayi)
});

const karedizisi =[];

dizi.forEach(sayi =>{
    karedizisi.push(sayi*sayi);
});

karedizisi.forEach(sayi =>{
    //p(sayi);
});

//map
//map ile bir diziyi işlem gerçirtip yeni bir diziye aktarıyoruz.

// const mapDizi = dizi.map(sayi => {
//     sayi*3;
// });

// p(mapDizi);//burada undefined problemi ile karşılaşıyoruz.

//Burda mapi tek satırda yapmamız gerekiyor. 
const mapDizi = dizi.map(sayi => sayi * 3 )

p(mapDizi);//burada undefined problemi ile karşılaşıyoruz.

//filter; bir filterye uygun dizi elemanlarını getirir.

const filterDizi = dizi.filter (sayi => sayi>2);

p(filterDizi);

//reduce;  kümül işlem diyebiliriz.

const toplam = dizi.reduce ((acc,sayi)=>{
    return acc + sayi;
});//},10); şeklinde yaparak 0 dan değil 10 dan başlamsını sağlayabiliriz. 

p(toplam);

//İleri nesneler//

///p(this);


//Class//

class Personel {

    constructor (ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet(){
        console.log(`Personel kaydedildi : ${this.ad} `);//alt+gr ile yapılıyot; " ` "
    }
}

const personel = new Personel("emre","erkmen");

personel.kaydet();