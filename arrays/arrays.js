// empty array initialised
let arr = new Array();
let arr1 = [];

let arr2 = new Array(1,89,0,-56,'aadra', false);
console.log(typeof(arr2));
console.log(arr2);


// built-in functions
arr2.push('axat'); // inserts element at right end
console.log(arr2);

arr2.pop(); // deletes element from right
console.log(arr2);

arr2.unshift(true); // insert at left
console.log(arr2);

arr2.shift() // delete from left
console.log(arr2);

console.log(arr2.slice(2,4)); // extracts a particular subarray, (a,b): b not included, runs till b-1

arr2.splice(2,1,'singh'); // reach index 2, remove 1 element(s) from there, and write 'singh'
console.log(arr2);

// map - return modified version (mapped) of each element
let arr3 = [2,4,65,28,7,5,9,0,12];
let ansArr = arr3.map(num => {
    return num*num;
})

console.log(ansArr);

// filter - filter out elements which satisfy the given condition
let newArray = arr3.filter(num =>{
    return num&1==1;
})
console.log(newArray);


// reduce
// accumulator - result get stored in this
// current - current value 
let ansArray = arr3.reduce((acc, curr) => {
    return acc+curr;
}, 0);

console.log(ansArray)


// find
let found = arr3.find(num => {
    return num > 20;
})
console.log(found);