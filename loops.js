// forEach
let arr = [4,23,5, 435, 90, 4, 187, 84];
arr.forEach((value, index) =>{
    console.log("Index: ", index, "Value: ", value);
})

// for-in: enumeraable properties of objects
let girlfriend = {
    name: "Aadra Sharma",
    roll_no: "B23187", 
    age: 19,
    hobby: "Listening to music",
    occupation: "College student",
    akshat: function(){
        console.log("Aadra loves Akshat and vice versa");
    }
}

console.log("-----------------------------")

for(key in girlfriend){
    console.log(key, " ", girlfriend[key]);
}


// for-in: iterates over indices not values
// 'i' used below is the index of element iterated

// for(i in arr){
//     console.log(arr[i]);
// }

console.log("-----------------------------")

// for-of: iterable objects like arrays, strings (iterates over the values)

for(i of arr){ // 'i' here is the value of elements iterated 
    console.log(i);
}