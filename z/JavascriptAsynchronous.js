//pemanggilan resolve
const myFunctionPromise = () => {
    return new Promise((resolve, reject) => {resolve("ini output resolve")})
}
const myPromise = () => {
    return new Promise ((resolve, reject) => console.log("ini output resolve");)
}

//pemanggilan reject
myFunctionPromise()
    .then((result) => { console.log(result) })
const myFunctionPromise = () => {
    return new Promise((resolve, reject) => {
        reject("ini output reject")
    })
}

myFunctionPromise()
    .catch((error) => {
        console.log(error); // reject
    })

//penggunaan resolve dan reject bersamaan
const myFunctionPromise = (param) => {
    return new Promise((resolve, reject) => {
        if (param === 2) {
            resolve("Resolve")
        } else {
            reject("reject")
        }
    })
}
// pemanggilan .then .catch
myFunctionPromise(2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// pemanggilan async await
let execute = async () => {let result = await myFunctionPromise(2)
    console.log(result);}
execute()

// pemanggilan dengan try catch, agar bisa memanggil resolve&error
let execute = async () => {
    try { let result = await myFunctionPromise(2)
        console.log(result);
    } 
        catch (error) 
        { console.log(error);
    }
}
execute()