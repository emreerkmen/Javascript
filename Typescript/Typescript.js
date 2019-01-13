var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Typescripr içinde normal javascript de yazabiliyoruz.
//tsc ile ts uzantısını derliyoruz ve ts dosyası javascript dosyasına dönüşüyor.
var yaz = function (metin) { return console.log(metin); };
var mesaj = yaz("Merhaba");
var say;
say = 10;
yaz(say);
//say = "Ankara"
var bool = false;
bool = false;
bool = true;
var sayilar = [1, 2, 3, 5];
var sayilar2 = [1, 2, 3];
var dizi = [2, "Ankara"];
dizi[0];
dizi[1];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var deger;
deger = "Ankara";
deger = 2;
var voidDeger = undefined;
function selamVer() {
    yaz("merhaba");
}
//undefined ile null genellkikle karıştırılır.
var yas; //bu şaun undefined yani değer atanmamış
function topla(x, y) {
    return x * y;
}
var topla2 = function (x, y) {
    return x * y;
};
yaz(topla2(2, 3));
//yaz(topla("Ankara",2));
var topla3 = function (x, y) {
    if (y === void 0) { y = 4; }
    return x * y;
};
yaz(topla3(3));
var topla4 = function (x, y) {
    return x * y;
};
yaz(topla4(3)); //NaN yani Not a Number problemi çıkar burda
var topla5 = function (x, y) {
    if (y) {
        return x * y;
    }
    else
        return x;
};
yaz(topla5(3, 40));
function davetEt(ilkDavetli) {
    var diğerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        diğerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + diğerleri.join(" ");
}
yaz(davetEt("Emre", "Erdi", "Ali", "Veli"));
function davetEt2() {
    var diğerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        diğerleri[_i] = arguments[_i];
    }
    return diğerleri.join(" ");
}
yaz(davetEt2());
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.kapıAc = function () {
        yaz("Kapı açıldı.");
    };
    return Ev;
}());
var anaEv = new Ev(1, 1, 1);
yaz(anaEv.odaSayisi);
anaEv.kapıAc();
var Insan = /** @class */ (function () {
    function Insan() {
    }
    Insan.prototype.nefesAl = function () {
        yaz("Nefes alınıyor.");
    };
    return Insan;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.krediKartıNo = 123456;
        return _this;
    }
    Object.defineProperty(Musteri.prototype, "isim", {
        get: function () {
            return "Sayın: " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: true,
        configurable: true
    });
    Musteri.prototype.siparisVer = function () {
        yaz("İki tost ustam");
    };
    Musteri.prototype.odemeYap = function () {
        this.yüz = "Baya çirkin";
        yaz("KK nomu girip odeme yaptım." + this.krediKartıNo);
    };
    return Musteri;
}(Insan));
var Calısan = /** @class */ (function (_super) {
    __extends(Calısan, _super);
    function Calısan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calısan.prototype.siparisAl = function () {
        yaz("Hemen getiriyotum abim.");
    };
    return Calısan;
}(Insan));
var ahmet = new Musteri();
ahmet.isim = "Ahmet";
yaz(ahmet.isim);
var mehmet = new Calısan();
ahmet.nefesAl();
ahmet.siparisVer();
mehmet.nefesAl();
mehmet.siparisAl();
var kkNo = ahmet.isim;
var Hareket = /** @class */ (function () {
    function Hareket() {
    }
    Hareket.prototype.restoronaGir = function () {
        yaz("Restorana girildi.");
    };
    ;
    return Hareket;
}());
var Sef = /** @class */ (function (_super) {
    __extends(Sef, _super);
    function Sef() {
        return _super.call(this) || this;
    }
    Sef.prototype.yerineGec = function () {
        yaz("Mutfağa geçildi.");
    };
    return Sef;
}(Hareket));
var YardımcıSef = /** @class */ (function (_super) {
    __extends(YardımcıSef, _super);
    function YardımcıSef() {
        return _super.call(this) || this;
    }
    YardımcıSef.prototype.yerineGec = function () {
        yaz("Mutfağa geçildi.");
    };
    return YardımcıSef;
}(Hareket));
var sef1 = new Sef();
sef1.yerineGec();
sef1.restoronaGir();
var hareket;
hareket = new Sef();
hareket = new YardımcıSef();
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    yaz(product.name + " kaydedildi.");
}
save({ id: 1, name: "Laptop", unitPrice: 10 });
var mouse = new Product2();
mouse.id = 2;
mouse.name = "A4T";
function save2(product) {
    yaz(product.name + " kaydedildi.");
}
save2(mouse);
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
        yaz("kaydedildi.");
    };
    return CustomerService;
}());
var sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa"];
for (var i in sehirler) { //index sayısını
    yaz(i);
}
for (var _i = 0, sehirler_1 = sehirler; _i < sehirler_1.length; _i++) { //index tuttuğu değeri veriyor
    var i = sehirler_1[_i];
    yaz(i);
}
function deger2(x) {
    return x;
}
var sayi = deger2(10);
yaz(sayi);
