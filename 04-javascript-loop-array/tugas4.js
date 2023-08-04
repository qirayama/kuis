//1
for (let loop1 = 0; loop1<10; loop1++) {
    console.log(loop1);
}
//2
for (let loop2=0; loop2 < 10; loop2++){
    if (loop2%2 === 1){
        console.log(loop2);
    }
}
//3
for (let loop3=0; loop3 < 10; loop3++){
    if (loop3%2 === 0){
        console.log(loop3);
    }
}
//4
let array1 = [1,2,3,4,5,6]
console.log(array1[array1.length -1]);
//5
let array2 = [5,2,4,1,3,5]
array2.sort()
console.log(array2);
//6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for (let index = 0; index < array3.length; index++) {
    console.log(array3[index]);
}
//7
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index2 = 0; index2 <= array4.length; index2++) {
    if (array4[index2] % 2 === 0 ){
        console.log(array4[index2])
    }
}
//8
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"]
let kalimat2 = kalimat.join()
console.log(kalimat2);
//9
var sayuran = [];
sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge');
console.log(sayuran);


