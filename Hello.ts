let huruf: string = "Hello World";


//cara deklarasi number
let umur : number = 19;
let tahun : number = 2017;

console.log(`Umur anda : ${umur} dan tahun  : ${tahun}`);


let total : number  = umur + tahun;

console.log(`Total umur+tahun : ${total}`);


//cara deklarasi Warna
enum Warna{biru,merah,kuning};

let w  : string = Warna[0];


console.log(w);
console.log(huruf);

//cara deklarasi fungsi

function a() : void {
    console.log('ini fungsi a');
}
function c() : string {
    return "Hello fungsi string";
}

a();
c();
b();

function b() : void {
    console.log('ini fungsi b');
    console.log(c());
}



//deklarasi fungsi
let halo = function (msg : string) : string {return msg;};
let sum : (a : number , b : number) => number = function ( a : number , b : number ) :number {return a + b;};
let add  = function (a : number , b : number ) : number {return a + b ;};


let hasil = sum(2,3);
console.log('fungsi tambah : ' + add(8,8));
console.log(hasil);


let result = halo('Hello Function');
console.log(result);

//deklarasi fungsi opsional parameter
let opt = function(a : string , b? : string)  : void {
    if(b){
      console.log('a : ' + a + ' b ' + b);
    }else{
      console.log('a :' + a);
    }
};

let abjad  = ['a','v','c'];

abjad.push('z','x','d');

abjad.shift();
abjad.unshift('w','w','w');

abjad.splice(3,abjad.length);

console.log(abjad.join(','));

opt("arief");
opt("arief","kahfi");
