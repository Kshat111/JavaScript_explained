const delay = 5000;
function sayHello() {
    console.log("Hello after ",delay," milliseconds!");
  }
  
setTimeout(sayHello, delay); // Call sayHello after 2 seconds (2000 milliseconds)
  
console.log("This will be printed immediately.");
// setTimeout() - allows us to schedule the execution of a function or the evaluation of an expression after a specified delay
// Note:
// Asynchronous: setTimeout is an asynchronous method. This means the browser won't wait for the function inside it to finish before continuing to execute other code. It schedules the function for execution after the specified delay.
// Return Value: setTimeout returns a numeric value, which is a timer ID. We can use this ID with clearTimeout to cancel the scheduled execution.



// to cancel this scheduled timeout, use clearTimeout() method by passing the timer ID returned by setTimeout()
const timeoutId = setTimeout(() => {
    console.log("This message won't be displayed");
}, 500);

clearTimeout(timeoutId); // Cancel the scheduled timeout