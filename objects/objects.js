// Reference type: Arrays, Objects, Functions
// let arr[5]={2,5,8,4,0}
// arr is a pointer pointing to {2,5,8,4,0}, stored in stack memory, {2,5,8,4,0} stored in heap memory

// Object is a collection of key-value pairs
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
console.log(girlfriend.name)
girlfriend.akshat();


console.log("-----------SHALLOW COPY-----------");
// New and old referencing variables point
// to the same object in the memory
// changing any of them will change both of them 
let new_girlfriend=girlfriend; 
console.log("girlfriend: ", girlfriend);
console.log("new_girlfriend: ", new_girlfriend);
console.log("After MODIfication")
new_girlfriend.hobby="Watching movies";
console.log("girlfriend: ", girlfriend);
console.log("new_girlfriend: ", new_girlfriend);


console.log("-----------DEEP COPY-----------");
// deep copy makes a copy of all the members of the old object
// allocates a separate memory location for the new object
// and then assigns the copied members to the new object
// both are independent, deleting anyone of them will not delete the other

let new_girlFriend=JSON.parse(JSON.stringify(girlfriend));
// new_girlFriend = {...girlfriend}

console.log("girlfriend: ", girlfriend);
console.log("new_girlFriend: ", new_girlFriend);
console.log("After MODIfication")
new_girlFriend.hobby="Travelling";
console.log("girlfriend: ", girlfriend);
console.log("new_girlFriend: ", new_girlFriend);