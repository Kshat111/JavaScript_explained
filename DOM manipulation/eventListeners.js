// BEST PRACTICE

function changeColor(){
    let box = document.getElementById("myDiv");
    box.style.cssText = "height: 300px; width: 300px; background-color: blue; position: relative; left: 400px; top: 300px; border-radius: 100%;";
}

let box = document.getElementById("myDiv");

box.addEventListener('click', changeColor); 
// event listener is a function that waits for a specific event
// to occur and then executes a callback function in response
// element.addEventListener(event, callbackFunction, options);


// box.removeEventListener('click', changeColor) // removes the click eventListener

// CHANGING DEFAULT ACTION OF HTML TAGS
let anchor = document.getElementById("anch");
anchor.addEventListener('click', function(event){
    event.preventDefault();
    anchor.textContent = "YOU'VE BEEN FOOLED!"
});