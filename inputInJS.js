// simple function that takes user input of length and breadth and find the area of the rectangle

const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the area function
const area = (l, b) => {
    return l * b;
};

// Prompt the user for length and breadth
rl.question('Enter the length: ', (len) => {
    rl.question('Enter the breadth: ', (bred) => {
        // Convert input to numbers
        len = parseFloat(len);
        bred = parseFloat(bred);

        // Calculate the area
        let ans = area(len, bred);

        // Print the result
        console.log('Area is:', ans);

        // Close the readline interface
        rl.close();
    });
});


// let len = prompt('Enter length:');
// let bred = prompt('Enter breadth:');

// len = parseFloat(len);
// bred = parseFloat(bred);

// const area = (l,b) => {
//     return l*b;
// }
// let ans = area(len, bred);
// console.log("Area is: ", ans);