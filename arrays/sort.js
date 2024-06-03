// sorting
let arr = [12, 34, 9, 45, 32, 11, -56, 7745, 0]

// let arr = ["thor", "iron", "man", "black panther"];
// let brr = arr.sort();


// let brr = arr.sort(); // this will give wrong answer in case of numbers (strings sorted well alphabetically)
// because sort() in JS - 
// sorts the elements on the basis of there Unicode values and not by there face value
// provide a compare function
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

let brr = arr.sort((a,b) => {
    return a-b
});

console.log("ascending order",brr);
console.log("descending order",brr.reverse());