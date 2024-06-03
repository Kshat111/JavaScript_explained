console.log("Hello World");
const accountId=144553   //value can't be changed
let accountEmail="akshat"  // restricted to a scope
var accountPassword="12345"  // global
accountCity="jaipur"  //also global but not used in practice
// accountId=23
accountEmail="singh" //variable values can be changed
accountPassword="2345"
accountCity="delhi"
console.log(accountId)
console.table([accountEmail,accountPassword,accountCity])
// redeclaration of constant values is not possible in "let"
// redeclaration of all values is possible in "var"

let a=5;
a="babbar" // JS is a dymanically typed language
console.log(a)

let num=1;
let str="1";
if(num==str){
    console.log(true)
}
else{
    console.log(false)
}
// "==" (loose equality) checks only for value while "===" (strict equality) checks for value and type

console.log(false || 2 || 7) // short cuiting in OR operator- if we have any truthy value, it will return that value (no need to check further)


