// HOISTING
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
// to the top of the current script or the current function



// Variable hoisting
// Variables defined with let and const are hoisted to the top of the block, but not initialized
// a variable in JS can be used before it has been declared but only in case of 'var' keyword
// let and const keywords will result in ReferenceError

console.log(num);
var num= 84;

// var num; gets to the top but not its value i.e. its not initialised



// Function hoisting
// functions also exhibit the same property but only for the given below type of declaration (uncommented)

sum(6,7);
function sum(a,b){
    console.log(a+b);
}

// sum(6,7);
// let sum = function (a,b){
//     console.log(a+b);
// }
// SyntaxError

// sum(6,7);
// const sum = (a,b) => {
//     console.log(a+b);
// }
// SyntaxError