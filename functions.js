// If any programming language has the ability to treat functions as values, 
// to pass them as arguments and to return a function from another function then it is said that 
// programming language has First Class Functions and the functions are called as First Class Citizens 
// in that programming language.


// // first method to declare a function
// function add(a,b){
//     return a + b;
// }

// // second method
// const add = function(a, b){ // let can also be used
//     return a + b;
// }

// // arrow function
// const add = (a, b) => {
//     return a + b;
// }


// let b ="10"/"2"
// console.log(typeof(b))


// default parameter
function whatsMyName(name = "Gabru"){ // multiple parameters, number, array, object, functions can also be passed as default parameter
    console.log("My Name is ", name);
}
whatsMyName("Pehelwan");
whatsMyName(null); // outputs null
whatsMyName(undefined); // outputs default parameter