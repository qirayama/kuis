for([Inisialisasi]; [Kondisi]; [Incremental/Decremental]) {
    [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
  }
//for-loop 1, looping dari angka 1-9 sederhana
  for (var angka = 1; angka < 10; angka++){
    console.log('iterasi ke-' + angka);
  }
// for-loop 2, looping mengembalikan angka total
  var jumlah = 0;
  for(var deret = 5; deret>0; deret--){ // deret = 5,4,3,2,1
    jumlah += deret; // += jumlah akan menyimpan nilai dari jumlah+deret, 0+5, 5+4, 9+3, 12+2, 14+1
    console.log('jumlah saat ini:' + jumlah); // 5, 9, 12, 14, 15
  }
  console.log('jumlah terakhir' + jumlah); // 14+1=15
// for-loop 3, looping increment dan decrement lebih dari 1
  for(var deret =0; deret < 10; deret +=2){ // deret = 0, 2, 4, 6, 8
    console.log('Iterasi dengan increment counter 2: ' + deret); // deret = 0, 2, 4, 6, 8
  }

  console.log('------------------------');

  for (var deret = 15; deret > 0; deret -= 3){ // deret = 15, 12, 9, 6, 3
   console.log('Iterasi dengan Decreement counter : ' + deret); // deret = 15, 12, 9, 6, 3
  }
// for-loop 4, looping kondisi
  for (var i = 0; i <= 6; i++){ // 0, 1, 2, 3, 4, 5, 6
    if(i === 3){ // dicek apakah i = 3?
        console.log('ini for-loop dengan kondisi, pengganti angka 3') //jika iya maka akan menulis ini
    } else{
        console.log(i) // jika bukan angka 3, maka akan terus menulis hasil dari for, 0, 1, 2, 4, 5, 6
    }
  }

  while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. 
    // Berupa boolean atau true/false.
      [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
    }

  //while-loop1, looping angka 1 sederhana
  var flag = 1;
  while (flag < 10){ // cek apakah flah kurang dari 10?
    console.log('Iterasi ke-' + flag); // iya/tidak, 1,2,3,4,5,6,7,8,9
    flag++; // menambahkan nilai flag +1, selama kondisi while terpenuhi
  }
  //while-loop2, looping mengembalikan angka total
  var deret = 5;
  var jumlah = 0;
  while (deret > 0){ // 5,4,3,2,1
    jumlah += deret; // 0+5, 5+4, 9+3, 12+2, 14+1
    deret--; // mengurangi deret selama kondisi while deret > 0
    console.log('jumlah saat ini: ' + jumlah); // 5,9,12,14,15
  }
  console.log(jumlah); //nilai terakhir jumlah yang keluar blok while adalah 15
  //while-loop3
  var i=0;
  while(i<5){ // cek apakah i kurang dari 5
    if(i === 3) { // cek apakah i=3?
        console.log("ini while dengan kondisi, jika i=3"); //jika iya makan akan print ini
    } else {
        console.log(i); //jika i bukan 3, makan akan print 0,1,2,4
    }
    i++;
  }
  // waspadai infinite looping
  var flag = 1; 
  while(flag < 10) { 
  // Loop akan terus berjalan, karena nilai flag tidak pernah berubah 
  console.log('Iterasi ke-' + flag);
  // harus ditambah flag++;
}
//--------------------------------------------------------------------------------------------------------------

//Array
var array = [2, 5, 1, 3, 4]
console.log( array[0]); // 2

//Array, melihat panjang array dengan .length
var hobbies = ["coding", "cycling", "climbing", "skateboarding"]
console.log(hobbies);
console.log(hobbies.length); // 4
console.log(hobbies[0]); // coding
console.log(hobbies[1]); // cycling
console.log(hobbies[hobbies.length -1]); //skateboarding, akses element terakhir dari array.

/*
push: menambah 1 nilai ke array ke index paling belakang, +1 nilai index paling belakang
pop: menghapus 1 nilai dari array index paling belakang, -1 nilai index paling belakang
unshift: menambah 1 nilai ke array index paling depan (index 0), +1 nilai index paling depan
shift: menghapus 1 nilai dari array index paling depan (index 0), -1 nilai index paling depan
join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
sort: mengurutkan elemen di dalam array sesuai alphabet
slice: mengambil beberapa lapis data
splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan 
*/

//.push()
  var numbers = [0,1,2]
  numbers.push(3)
  console.log(numbers); // [0,1,2,3]
//.pop()
  var numbers = [0,1,2,3,4]
  numbers.pop() //tidak menerima parameter
  console.log(numbers); //[0,1,2,3]
//.unshift()
  var numbers = [0,1,2,3,4]
  numbers.unshift(-1)
  console.log(numbers); //[-1,0,1,2,3,4]
//.shift()
  var numbers = [0,1,2,3,4]
  numbers.shift() //tidak menerima parameter
  console.log(numbers); // [1,2,3,4]
//.sort
  var animals = ["kera", "gajah", "musang"]
  animals.sort() //menerima parameter, default urut dari kecil-besar, dan a-z
  console.log(animals); //["gajah", "kera", "musang"]
//.slice
  var angka = [0,1,2,3]
  var irisan1 = angka.slice(0,3) // 3 array mulai dari 0
  console.log(irisan1); //[0,1,2]
  var irisan2 = angka.slice(0) // semua array mulai dari 0
  console.log(irisan2); //[0,1,2,3]
//.splice, array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);
  var fruits = ["banana", "orange", "grape"]
  fruits.splice(1, 0, "watermelon") // jika ingin menambah maka gunakan 3 parameter, dari array k-1, tambahkan "watermelon"
  console.log(fruits); // ["banana", "watermelon" "orange", "grape"]
//.splice, penghapusan 
  var fruits = ["banana", "orange", "grape"]
  fruits.splice(0,2) // jika ingin menghapus maka gunakan 2 parameter, kurangi 2 elemenet array mulai dari array 0
  console.log(fruits); // ["grape"]
//.splice, penghapusan vr2
  var fruits = ["banana", "orange", "grape"]
  fruits.splice(1,1) // kurangi 1 element array, mulai dari array 1
  console.log(fruits); // ["banana", "grape"]
//.split
  var biodata = "name:john,doe" 
  var name = biodata.split(",")
  console.log(biodata.split(":")) // untuk pemakaian var harus langsung di panggil di console.log

  const biodata = "name:john,doe" 
  const name = biodata.split(":")
  console.log(name) // ["name", "john,doe"]

  let biodata = "name:john,doe" 
  let name = biodata.split(":")
  console.log(name) // ["name", "john,doe"]
//.join
  var title = ["my", "first", "experience", "as", "programmer"]
  var slug = title.join(" ")
  console.log(slug); // my first experience as programmer
//.destructuring, memilih array menggunakan array dari numbers
var numbers = [1,2,3]

var numberOne = numbers [0] // 1
var numberTwo = numbers [1] // 2
var numberThree = numbers [2] // 3

console.log(numberOne);
//.destructuring 2, memilih array menggunakan variable
let numbers = [1,2,3]

const [numberOne, numberTwo, numberThree] = numbers

console.log(numberTwo);
//.Rest Parameters "..."
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores;

console.log(first); // 98
console.log(second); // 95
console.log(third); // 93
console.log(restOfScores); //90,87,85
//.Spread Operator "..."
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']
//.Before ES6
var combinedArray = array1.concat(array2).concat(array3)
console.log(combinedArray);
//.After ES6
let combinedArray2 = [...array1, ...array2, ...array3]
console.log(combinedArray2); 






