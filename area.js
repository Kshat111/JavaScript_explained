const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the length of the rectangle: ', (length) => {
    rl.question('Please enter the breadth of the rectangle: ', (breadth) => {
        let L = parseInt(length, 10);
        let B = parseInt(breadth, 10);

        if (!isNaN(L) && !isNaN(B)) {
            let area = L * B;
            console.log("The area of the rectangle is: " + area);
        } else {
            console.log("Please enter valid integer values for both length and breadth.");
        }

        rl.close();
    });
});
