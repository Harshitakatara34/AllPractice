// var a = 1 ;
// setTimeout(() => {
// console.log(a);
// }, 0); for (let i = 0 ; i < 10 ; i++) {}
// a++;    //2


// First, a is declared and set to 1.
// Then, the setTimeout function is set up to log the value of a. However, it doesn't execute immediately due to the 0ms timeout. Instead, it's placed in the event queue to be executed once the current code finishes.
// Next, the for loop runs, iterating 10 times but performing no action.
// After the loop, a is incremented to 2.
// Finally, the setTimeout function in the event queue executes, logging the value of a.