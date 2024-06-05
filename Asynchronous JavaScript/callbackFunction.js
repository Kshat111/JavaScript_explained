// callbacks are just a function passed into another function


// example 1
const calculator = (a,b,operation) => {
    return operation(a,b);
}
const adder = calculator(10, 20, function(m,n){
    return m + n;
})
console.log("Adder = "+adder);

const subtractor = (p,q) => {
    return Math.abs(p - q);
}

console.log("Sbtractor = "+ calculator(20, 34, subtractor)); // here subtractor is passed (not called) as a parameter for the calculator function




// example 2
function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched after 3 sec");
    }, 3000);
  }
  
  fetchData((message) => {
    console.log(message); // "Data fetched" after 1 second
  });
  