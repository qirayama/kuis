//basic hello world js
var sayhello = "hello world!"
console.log(sayhello)

var name = "john" // tipe string
var angka = 12 // tipe int,real,dst
var todayIsFriday = false //boolean

console.log(name) // john
console.log(angka); // 12
console.log(todayIsFriday); // false

//var dan let
var BeforeES6 = "BeforeES6"
console.log(BeforeES6);
var x = 1;
if (x === 1){           
    var x = 2;              // var disini

    console.log(x); //2
}
console.log(x); //2, var bisa diakses diluar blok if

var AfterES6 = "AfterES6"
console.log(AfterES6);
let x = 1;
if (x ===1){
    let x = 2; // variable let hanya block scope        
    console.log(x); //2,
}
console.log(x); //1, jadi hasil dari blok if tidak bisa diakses disini

//senteces, pemilihan kata menggunakan angka, urutan mulai dari 0
let sentences = "Javascript" 
console.log(sentences[0]); // J karena js selalu dihting dari 0
console.log(sentences[8]); // t karena urutan ke 8 mulai dari 0
//
let word = "Javascript is Awesome"
let word2 = " 2"
console.log(word.length); //21, untuk menghitung jumlah huruf, termasuk spasi
console.log('i am a string'.charAt(0)); //i, untuk memilih huruf menggunakan angka
console.log(word.concat(word2)); // JiA 2, untuk menggabungan 2
console.log(word.indexOf("Java")); // 0, menemukan huruf pertama yang ditemukan yaitu J pada urutan 0
console.log(word.indexOf("s")); // 4
console.log(word.indexOf("a")); // 1
// substr, memilih huruf keberapa dan menuliskannya sampai habis
let car1 = 'Lykan Hypersport';
let car2 = car1.substr(6);
console.log(car2); //Hypersport
// varibale int, real, array. Value nya disusun secara spesifik
let int = 12;
let real = 3.45;
let arr = [6, 7, 8];
let strInt = String(int); // int, real, arr, dirubah tipe datanya menjadi string
let strReal = String(real);
let strArr = String(arr);
console.log(strInt);
console.log(strReal);
console.log(strArr);

// toString() mengkonversi tipe data lain menjadi string
let number = 21;
console.log(number.toString()); // 21 > "21", int jadi string
let array = [1,2];
console.log(array.toString()); // [1,2] > "1,2", array jadi string

let number1 = Number("90");
let number2 = Number("1.23");
let number3 = Number("4 5"); //Number(String) merubah string menjadi angka

let int = '89.5';
let real = '56.7';
let strInt_1 = parseInt(int);
let strInt_2 = parseInt(real);
let strInt_3 = parseFloat(int);
let strInt_4 = parseFloat(real);
//parseInt dan parseFloat mengembalikan angka dari string
//gunakan parseFloat() jika ingin mempertahankan angka dibelakang koma

if (true){
    console.log(jalankan code);
}
if (false){
    console.log(code tidak dijalankan);
}

//if
var mood = "happy"
if ( mood = "happy" ) {
    console.log("aku senang hari ini");
}

//if 4 branching
var minimarketStatus = "open"
if (minimarketStatus == "open") {
    console.log("Saya akan membeli telur dan buah");
} else {
    console.log("saya tidak jadi beli, minimarket tutup");
}

//if 5 branching
var minimarketStatus = "open"
var minuteRemainingToOpen = 5
if (minimarketStatus == "open"){
    console.log("Saya akan membeli telur dan buah");
} else if (minuteRemainingToOpen == 5){
    console.log("toko akan buka 5 menit lagi, saya akan tunggu");
} else {
    console.log("minimarket tutup saya pulang lagi");
}

//nested if 6 conditional
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout"
if (minimarketStatus == "open"){ // kondisi 1
    console.log("saya akan membeli telur dan buah");
    if(telur == "soldout" || buah == "soldout"){ // kondisi 2,3
        console.log("belanjaan saya tidak lengkap");
    } else if (telur == "soldout"){ //kondisi 4
        console.log("telur habis");
    } else if (buah == "soldout"){ //kondisi 5
        console.log("buah habis");
    }
} else { //kondisi 6
    console.log("Minimarket tutup saya pulang lagi");
}

//switch case
var buttonPushed = 1;
switch(buttonPushed){
    case 1: {console.log('matikan tv'); break; }
    case 2: {console.log('turunkan volume tv'); break; }
    case 3: {console.log('tingkatkan volume tv'); break;}
    case 4: {console.log('matikan suara tv'); break;}
    default: {console.log('tidak terjadi apa-apa');}
}

//ternary operator, if singkat
var age = 20
var bisaVote= age > 20 ? "bisa vote" : "belum bisa vote" //belum bisa vote
console.log(bisaVote)
var angka = 9
var jenisBilangan = angka % 2 === 0 ? "bilangan genap" : "bukan bilangan genap" //bukan bilangan genap
console.log(jenisBilangan);

let angka = 2
let ternary = angka === 2 ? "angka nya 2" : "bukan angka 2"
console.log(ternary);   

/*let angka = 2

if(angka === 2){
  console.log("angka nya 2")
}else{
  console.log("bukan angka 2")
}










