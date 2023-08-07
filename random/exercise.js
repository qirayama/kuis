var personArr = ["ariq", "nico", "gunawan"]
var personObj = {
    anak1: "ariq",
    anak2: "nico",
    anak3: "gunawan"
}

console.log(personArr[0])
console.log(personObj.anak1, person.anak2)

function myFunction() {
    return "Ariq Monetra"
}
console.log("nama saya : " + myFunction());

function myFunction(angka1, angka2) {
    return angka1 + angka2
}
console.log(myFunction(20, 7));

conts arr = [1, 2, 3, 4, 5]
const [a, b, , , c] = arr

console.log(arr[0]);

var notTrue = false;
if (!notTrue) {
    console.log("true");
} else {
    console.log("false");
}

let array1 = [1, 2];
let tmp = 0;

tmp = array1[0]
array1[0] = array1[1]

console.log(array1[0]);

var myArray = [10, 20, 30];
myArray.unshift(0);
console.log(myArray);

function mystery(...params) {
    return params;
} let a = mystery(1, 23, 4);
mystery()

let a = "1"
if (a === 1) {
    console.log("true");
} else {
    console.log("false");
}

let a = 2
function penjumlahan() {
    if (a === 2) {
        a = a + 1
    }
    return a
}
if (a === "2") {
    a = a + 4
}
console.log(a);

let angka1 = 1;
let tmp = 0;
let angka2 = 2;

tmp = angka1
angka1 = angka2

console.log(tmp + "&" + angka1);

let array1 = [1, 2];
let tmp = 0;

tmp = array1[0]
array1[0] = array1[1]
array1[1] = tmp

console.log("element index 1 :", array1[1]);
console.log("hasilnya : ", array1);

const volumeBalok = (...rest) => {
    let [panjang, lebar, tinggi] = rest
    let volume = panjang * lebar * tinggi
    return volume
}

let a = 50
let b = 0
a > 10 ? b += a : b -= a
console.log(b);




