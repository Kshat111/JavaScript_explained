let fruits = ["Apple", "Orange", "Plum",true, 0];
let ansArr = fruits.filter(value =>{
    if(typeof(value) == 'number') return true; 
    // 0 is a falsy value in JS, that's why true is returned and no 'value' 
    return false;
})
console.log(ansArr);