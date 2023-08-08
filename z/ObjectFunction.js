var personArr = ["John", "Doe", "male", 27] //array
var personObj = { //object
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    age: 27
}
console.log(personArr[0]) // cara panggil array John
console.log(personObj.firstName) // cara panggil object John 

/*r object = {
    [key]: [value]
} */

var car = {
    brand: "Ferrari",
    type: "Sports Car",
    price: 50000000
    "horse power": 986 // untuk key yang ada spasi maka memerlukan petik dua
}

var car2 = {}
// meng-assign key:value dari object car2,
//Catatan : Value yang kita assign pada object tidak terbatas hanya string atau number saja tapi bisa juga Array, boolean, bahkan Object lagi di dalamnya.
car2.brand2 = "Lamborghini"
car2.brand = "Sports Car"
car2.price = 100000000
car2["horse power"] = 730

console.log(car2) // semua object akan diurutkan sesuai alphabest dan yang paling sedikit hurufnya
console.log(car2.brand2)
console.log(car2["horse power"])

//cara akses nilai object dengan cara berbeda
var motorcycle1 = {
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"
console.log(motorcycle1["price"]) // "1000", menggunakan ["namakey"]

// FYI : Tipe data Array technically adalah sebuah Object tetapi Array memiliki sifat khusus. Array secara otomatis memberikan indeks yang analogi dengan key pada Object. Coba kamu cek di console menggunakan typeof
var array = [1, 2, 3]
console.log(typeof array) // object

//ARRAY OF OBJECT
var mobil = [
    { merk: "BMW", warna: "merah", tipe: "sedan" },
    { merk: "toyota", warna: "hitam", tipe: "box" },
    { merk: "audi", warna: "biru", tipe: "sedan" }
]

console.log(mobil[0].merk) // BMW
console.log(mobil[1].merk) // Toyota
console.log(mobil[2].merk) // Audi

//ARRAY ITERATION
/*
forEach()
map()
filter()
reduce()
every()
some()
indexOf()
includes()
dan masih banyak lagi
*/
// pemilihan dengan foreach, foreach method untuk array berfungsi untuk perulangan data dari array,
var mobil = [
    { merk: "BMW", warna: "merah", tipe: "sedan" },
    { merk: "toyota", warna: "hitam", tipe: "box" },
    { merk: "audi", warna: "biru", tipe: "sedan" }
]
mobil.forEach(function (item) {
    console.log("tipe : " + item.tipe);
})
mobil.forEach(function (item) {
    console.log("merk : " + item.merk);
})
// Pemilihan dengan map, map method untuk array berfungsi untuk membuat array baru.
var mobil = [
    { merk: "BMW", warna: "merah", tipe: "sedan" },
    { merk: "toyota", warna: "hitam", tipe: "box" },
    { merk: "audi", warna: "biru", tipe: "sedan" }
]
var arrayWarna = mobil.map(function (item) {
    return item.warna
})
console.log(arrayWarna);
// Pemilihan dengan filter, filter method untuk array berfungsi untuk memnyaring data yang diinginkan.
var mobil = [
    { merk: "BMW", warna: "merah", tipe: "sedan" },
    { merk: "toyota", warna: "hitam", tipe: "box" },
    { merk: "audi", warna: "biru", tipe: "sedan" }
]
var arrayMobilFilter = mobil.filter(function (item) {
    return item.merk != "BMW"; // pilih di item array yang merk nya selain "BWM"
})
console.log(arrayMobilFilter)

var arrayMobilFilter = mobil.filter(function (item) {
    return item.tipe != "sedan"; // pilih item array yang tipe nya selain "sedan"
})
console.log(arrayMobilFilter)

//Destructuring Object ES6
//Destructuring adalah fitur pada JavaScript yang memungkinkan Anda untuk dengan mudah mengekstrak nilai-nilai dari 
//objek atau array dan menyimpannya dalam variabel terpisah dengan cara yang lebih singkat.
var studentName = {
    firstName: 'Peter',
    lastName: 'Parker'
};

const { firstName, lastName } = studentName

console.log(firstName, lastName) // Peter
console.log(lastName); // Parker

//Spread Operator
//Operator spread pada JavaScript adalah fitur yang memungkinkan kita untuk "membuka" atau "menyebarluaskan" elemen-elemen 
//dari sebuah array atau properti-properti dari sebuah objek ke dalam tempat tertentu. 
//Fitur ini diperkenalkan dalam ECMAScript 6 (ES6) dan sangat bermanfaat dalam banyak skenario.

//Spread in object
let person = { name: "john", age: 30 } // object name : "john", age:30
let newPerson = { ...person, hobby: "Gaming" } // ditambah variable object ...person +, hobby : "gaming"
console.log(newPerson) // {name: "john", age: 30, hobby: "Gaming"}

//Enhanced Object Literals, untuk menyederhanakan pembuatan objek dengan sintaksis yang lebih ringkas dan ekspresif.
const fullName = 'John Doe'
const john = { fullName }

//-----------------------------------------------------------------------------------------------
//FUNCTION
//Cara atau bentuk penulisan sebuah function javascript adalah sebagai berikut:
/*
function nama_function(parameter/argument 1, parameter/argument 2, ...) {
  [Isi dari function berupa tindakan/steatment]
  return [expression];
}

Function adalah sebuah blok kode yang disusun sedemikian rupa untuk menjalankan sebuah tindakan. 
Blok kode ini dibuat untuk dapat bisa digunakan kembali.
*/

//Contoh Function 1: Function sederhana tanpa return
function tampilkan() {
    console.log("halo!"); // log didalam fungsi
}

tampilkan(); //maka bisa di panggil nilai

//Contoh Function 2: Function sederhana dengan return
function munculkanAngkaDua() {
    return 2 // kalau ini hanya memberikan nilai, tapi fungsi tidak bisa di panggil
}
var tampung = munculkanAngkaDua(); // jadi harus diberikan variable
console.log(tampung) // agar bisa dipanggil, 2

//Contoh Function 3: Function dengan parameter
function kalikanDua(angka) { // fungsi kalikanDua=2
    return angka * 2 // 1x2=2
}
var tampung = kalikanDua(2); //di panggil dan dikalikan 2
console.log(tampung)  //hasilnya 4

//Contoh Function 4: Pengiriman parameter lebih dari satu
function tampilkanAngka(angkaPertama, angkaKedua) { //fungsi dengan 2 parameter
    return angkaPertama + angkaKedua // 2 parameter diberikan fungsi penambahan
}
console.log(tampilkanAngka(5, 3)) // // memanggil fungsi dan memberikan nilai pada parameter

//Contoh Function 5: Inisialisasi parameter dengan nilai default
function tampilkanAngka(angka = 1) {
    return angka
}

console.log(tampilkanAngka(5)) // 5, scoring log lebih kuat daripada hasil function
console.log(tampilkanAngka()) // 1

//Contoh Function 6:  Function dengan Conditional
function tampilAngka(angkaPertama, angkaKedua) {
    var hasil = angkaPertama + angkaKedua
    if (hasil > 10) {
        return "hasil lebih besar dari 10"
    } else if (hasil > 0 && hasil < 10) {
        return "hasil lebih kecil dari 10"
    } else if (hasil === 0) {
        return "hasil 0"
    } else {
        return "Tidak ada nilai dari parameter"
    }
}
console.log(tampilAngka(5, 10))

//Contoh Function 6:  Function dengan Looping didalamnya
function looping(iteration) {
    for (var i = 0; i < iteration; i++) {
        console.log(i)
    }
}
looping(5)

//Anonymous Function, dapat menampung function sebagai variable dengan sebuah 
//bentuk function yang dinamakan Anonymous Function.
var fungsiPerkalian = function (angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
}
console.log(fungsiPerkalian(2, 4))

//Default Parameters, biasanya kita dalam membuat function pasti punya parameter tapi 
//apakah parameter itu sendiri bisa di beri default, jawabannya adalah ya 'di ES6 kita dapat memasukkan default parameter seperti contoh di bawah ini:

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5 


// Rest Parameters in FuncTion ( ES6 )Rest Parameter ini berguna untuk menggabungkan semua 
//paramater pada function ke dalam array. Dengan menggunakan Rest Parameter ini dapat 
//membantu kita mendefinisikan function dengan rapi serta memberikan parameter yang tidak terbatas pada sebuah function.

//First example 
const filter = (...rest) => {
    const texts = rest.filter(el => el.text !== undefined).map(el => el.text);
    return texts.join(' ');
}

console.log(filter(1, { text: "wonderful" }, "next")); // Output: wonderful
//second example 
const fullName = (...rest) => {
    let [firstName, lastName] = rest
    return `${firstName} ${lastName}`
}

console.log(fullName("John", "Doe")) // John Doe








function tampilkan() {
    for (let i = 0; i < 10; i++) {
        ;
        console.log("halo!");
    }
    return
}
tampilkan(); //memanggil fungsi tampilkan

//Arrow functions merupakan fitur yang ada pada es6 bisa dibilang lebih singkat dari function biasa, 
//function biasa sendiri masih bisa di gunakan.
const myFunction = () => {
    for (let i = 0; i < 5; i++) {
        ;
        console.log("halo!");
    }
    return
}
myFunction()
// contoh arrow 2
const add = (a, b) => a + b
console.log(add(1, 2));

