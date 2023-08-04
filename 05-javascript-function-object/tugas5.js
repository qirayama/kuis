// 1
function cetakFunction() {
    return "Ariq Monetra"
}
console.log("Halo Nama Saya : " + cetakFunction())

// 2
function myFunction(angka1, angka2) {
    return angka1 + angka2
}
let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2);
console.log(output);
// 2 versi 2
function myFunction(angka1, angka2) {
    return angka1 + angka2
}
console.log(myFunction(20, 7));
// 3
const myFunction = () => {
    return "hello"
}
console.log(myFunction())
// 4
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
}
console.log(obj.bahasa);
// 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    Nama: arrayDaftarPeserta[0],
    "Jenis Kelamin": arrayDaftarPeserta[1],
    Hobby: arrayDaftarPeserta[2],
    "Tahun Lahir": arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta)
// 6
var buah = [
    { nama: "Nanas", warna: "kuning", adaBijinya: "false", harga: 9000 },
    { nama: "Jeruk", warna: "Oranye", adaBijinya: "True", harga: 8000 },
    { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "True", harga: 10000 },
    { nama: "Pisang", warna: "Kuning", adaBijinya: "false", harga: 5000 }
]

var buahFilter = buah.filter(function (item) {
    return item.adaBijinya != "True";
})
console.log(buahFilter);
// 7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
}
// kode diatas ini jangan di rubah atau di hapus sama sekali
const { name, brand, year } = phone
// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year)
// 8
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}

let objOutput = {}
// kode diatas ini jangan di rubah atau di hapus sama sekali
Object.assign(objOutput, dataBukuTambahan, buku);
// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput)
// 9 
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}
const functionObject = (param) => {
    return param;
}
console.log(functionObject(mobil));
