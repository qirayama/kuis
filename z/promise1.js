//1
const myCountPromise = (input) => {
    return new Promise((resolve, reject) => {
        if (input !== undefined) {
            setTimeout(() => {
                const result = input * 2;
                resolve(result);
            }, 2000);
        } else {
            reject("Maaf tidak ada nilai dalam parameter");
        }
    });
};

myCountPromise(2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// 2
function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage >= amountOfPage &&
                x.isColorful == colorful));
        } else {
            var reason = "Maaf buku di bawah 40 halaman tidak tersedia"
            reject(reason);
        }
    });
}

async function executeFilterBooksPromise() {
    try {
        // Jalankan promise dengan buku berwarna dan jumlah halaman 40
        const result1 = await filterBooksPromise(true, 40);
        console.log("Buku berwarna dan jumlah halaman 40:", result1);

        // Jalankan promise dengan buku tidak berwarna dan jumlah halaman 250
        const result2 = await filterBooksPromise(false, 250);
        console.log("Buku tidak berwarna dan jumlah halaman 250:", result2);

        // Jalankan promise dengan buku berwarna dan jumlah halaman 30
        const result3 = await filterBooksPromise(true, 30);
        console.log("Buku berwarna dan jumlah halaman 30:", result3);
    } catch (error) {
        console.log(error);
    }
}

executeFilterBooksPromise();

const myCountPromise = (input) =>
    return new Promise((resolve,reject) =>{
        if (input !== undefined) {
            setTimeout(() =>){
                const result = input * 2;
                resolve(result);
            }
        }
    })

// parameter bisa diubah
function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage >= amountOfPage &&
                x.isColorful == colorful));
        } else {
            var reason = "Maaf buku di bawah 40 halaman tidak tersedia"
            reject(reason);
        }
    });
}

async function executeFilterBooksPromise(colorful, amountOfPage) {
    try {
        const result = await filterBooksPromise(colorful, amountOfPage);
        console.log(`Buku ${colorful ? "berwarna" : "tidak berwarna"} dan jumlah halaman ${amountOfPage}:`, result);
    } catch (error) {
        console.log(error);
    }
}

executeFilterBooksPromise(true, 40);
executeFilterBooksPromise(false, 250);
executeFilterBooksPromise(true, 30);

const myCountPromise = (input) =>
    new Promise((resolve, reject) => {
        if (input !== undefined) {
            setTimeout(() => {
                const result = input * 2;
                resolve(result);
            });
        }
    });

