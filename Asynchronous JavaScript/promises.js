// A Promise is an object representing the eventual completion or failure of an
// asynchronous operation, and its resulting value.
// It allows us to write asynchronous code in a more sequential and readable manner.

// if a snippet of code is taking time to give the output then that function promises us to give a result
// a promise has following three states: (i) pending, (ii) fullfiilled, (iii) rejected



// CREATING A PROMISE

// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation successful */) {
//         resolve("Operation completed successfully");
//     } else {
//         reject("Operation failed");
//     }
// });



let a = 10;
let b = 30;
let add = a + b;
let mul = a*b;

// The async keyword is used to define a function as asynchronous.
// When a function is declared with the async keyword, it always returns a Promise.
// Inside an async function, we can use the await keyword to pause the execution of
// the function until a promise is settled (resolved or rejected).

async function getData(){
    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await resultFromServer.json());
}
getData();

console.log(add);
console.log(mul);
