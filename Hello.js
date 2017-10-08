var huruf = "Hello World";
//cara deklarasi number
var umur = 19;
var tahun = 2017;
console.log("Umur anda : " + umur + " dan tahun  : " + tahun);
var total = umur + tahun;
console.log("Total umur+tahun : " + total);
//cara deklarasi Warna
var Warna;
(function (Warna) {
    Warna[Warna["biru"] = 0] = "biru";
    Warna[Warna["merah"] = 1] = "merah";
    Warna[Warna["kuning"] = 2] = "kuning";
})(Warna || (Warna = {}));
;
var w = Warna[0];
console.log(w);
console.log(huruf);
//cara deklarasi fungsi
function a() {
    console.log('ini fungsi a');
}
function c() {
    return "Hello fungsi string";
}
a();
c();
b();
function b() {
    console.log('ini fungsi b');
    console.log(c());
}
//deklarasi fungsi
var halo = function (msg) { return msg; };
var sum = function (a, b) { return a + b; };
var add = function (a, b) { return a + b; };
var hasil = sum(2, 3);
console.log('fungsi tambah : ' + add(8, 8));
console.log(hasil);
var result = halo('Hello Function');
console.log(result);
//deklarasi fungsi opsional parameter
var opt = function (a, b) {
    if (b) {
        console.log('a : ' + a + ' b ' + b);
    }
    else {
        console.log('a :' + a);
    }
};
var abjad = ['a', 'v', 'c'];
abjad.push('z', 'x', 'd');
abjad.shift();
abjad.unshift('w', 'w', 'w');
abjad.splice(3, abjad.length);
console.log(abjad.join(','));
opt("arief");
opt("arief", "kahfi");
