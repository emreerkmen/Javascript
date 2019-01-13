
//Typescripr içinde normal javascript de yazabiliyoruz.
//tsc ile ts uzantısını derliyoruz ve ts dosyası javascript dosyasına dönüşüyor.
const yaz = (metin) => console.log(metin);


let mesaj = yaz("Merhaba");


let say: number;

say = 10;

yaz(say);

//say = "Ankara"

let bool: boolean = false

bool = false
bool = true

let sayilar: number[] = [1, 2, 3, 5]

let sayilar2: Array<number> = [1, 2, 3]

let dizi: [number, string] = [2, "Ankara"]
dizi[0]
dizi[1]

enum Renk { Kirmizi = 1, Siyah = 2, Mavi = 3 }
let renk: Renk = Renk.Kirmizi

let deger: any

deger = "Ankara"

deger = 2

let voidDeger: void = undefined

function selamVer(): void {
    yaz("merhaba");
}

//undefined ile null genellkikle karıştırılır.

let yas: number //bu şaun undefined yani değer atanmamış

function topla(x: number, y: number): number {
    return x * y;
}

let topla2 = function (x: number, y: number): number {
    return x * y;
}

yaz(topla2(2, 3));

//yaz(topla("Ankara",2));

let topla3 = function (x: number, y: number = 4): number {
    return x * y;
}

yaz(topla3(3));

let topla4 = function (x: number, y?: number): number {   //y'ye değer vermesende olur demek.
    return x * y;
}

yaz(topla4(3));//NaN yani Not a Number problemi çıkar burda

let topla5 = function (x: number, y?: number): number { // ? işareti her zaman yani defalut parametreler her zaman sonda olur. 
    if (y) {
        return x * y;
    } else
        return x;
}

yaz(topla5(3, 40))

function davetEt(ilkDavetli: string, ...diğerleri: string[]): string {
    return ilkDavetli + " " + diğerleri.join(" ");
}

yaz(davetEt("Emre", "Erdi", "Ali", "Veli"));

function davetEt2(...diğerleri: string[]): string {
    return diğerleri.join(" ");
}

yaz(davetEt2());

class Ev {
    odaSayisi: number;
    pencereSayisi: number;
    kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    kapıAc() {
        yaz("Kapı açıldı.");
    }
}

let anaEv = new Ev(1, 1, 1);

yaz(anaEv.odaSayisi);

anaEv.kapıAc();

class Insan {
    private ruh: string;
    protected yüz: string;
    nefesAl() {
        yaz("Nefes alınıyor.");
    }
}

class Musteri extends Insan {

    private krediKartıNo: number = 123456;
    private _isim: string;

    get isim(): string {
        return "Sayın: " + this._isim;
    }

    set isim(ad: string) {
        this._isim = ad;
    }

    siparisVer() {
        yaz("İki tost ustam");
    }
    odemeYap() {
        this.yüz = "Baya çirkin";
        yaz("KK nomu girip odeme yaptım." + this.krediKartıNo)
    }

}

class Calısan extends Insan {
    siparisAl() {
        yaz("Hemen getiriyotum abim.");
    }
}

let ahmet = new Musteri();
ahmet.isim = "Ahmet";
yaz(ahmet.isim)
let mehmet = new Calısan();

ahmet.nefesAl();
ahmet.siparisVer();

mehmet.nefesAl();
mehmet.siparisAl();

let kkNo = ahmet.isim;


abstract class Hareket {

    constructor() {

    }

    restoronaGir(): void {
        yaz("Restorana girildi.")
    };

    abstract yerineGec(): void;
}


class Sef extends Hareket {

    constructor() {
        super();
    }

    yerineGec(): void {
        yaz("Mutfağa geçildi.");
    }
}

class YardımcıSef extends Hareket {

    constructor() {
        super();
    }

    yerineGec(): void {
        yaz("Mutfağa geçildi.");
    }
}

let sef1 = new Sef();

sef1.yerineGec();
sef1.restoronaGir();

let hareket: Hareket;

hareket = new Sef();

hareket = new YardımcıSef();

interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    yaz(product.name + " kaydedildi.");
}

save({ id: 1, name: "Laptop", unitPrice: 10 });

let mouse = new Product2();
mouse.id = 2;
mouse.name = "A4T"

function save2(product: Product2) {
    yaz(product.name + " kaydedildi.");
}

save2(mouse);

interface IPersonService {
    save(): void;
}

class CustomerService implements IPersonService {
    save(): void {
        yaz("kaydedildi.");
    }
}


let sehirler: string[] = ["Ankara", "İstanbul", "İzmir", "Bursa"]

for (let i in sehirler) {//index sayısını
    yaz(i)
}

for (let i of sehirler) {//index tuttuğu değeri veriyor
    yaz(i)
}

//GENERICSSSSS//
function deger2(x: number): number {
    return x;
}

function deger3(x: string): string {
    return x;
}

let sayi = deger2(10)
yaz(sayi)

let sehir = deger3("Ankara")
yaz(sehir)

function deger4<T>(x:T):T{
    return x;
}

let asDeger = deger4<number>(2)
let asSehir = deger4<string>("Ankara")

class GenericClass<T> {
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()

let a= sinif.fonksiyon(2);

let genericSnıf = new GenericClass<string>()

let b = genericSnıf.fonksiyon("Ankara");