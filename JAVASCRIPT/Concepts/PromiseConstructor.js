// The Promise constructor ? 


// Let's clarify how the Promise constructor works and how its execution affects the flow of code.

// What is the Promise Constructor?
// When you create a Promise with the constructor:


// const p1 = new Promise((resolve, reject) => {
//    // Executor function
//    console.log('Inside Promise constructor');
//    resolve('value');
// });


// The executor function (the function passed to the Promise constructor) is executed immediately, synchronously.
// Any asynchronous behavior (e.g., setTimeout, await) inside the executor function depends on the code you provide.
// How Promises Work in the Event Loop
// Synchronous execution: The executor function is run immediately when the Promise is created.

// Asynchronous behavior: Once resolve() or reject() is called, the .then() or .catch() callbacks attached to the Promise are added to the microtask queue for execution after the current synchronous code.

// Example Code Walkthrough

//========================

// const p1 = new Promise(resolve => {
//    console.log('Executor start'); // Synchronous, runs immediately
//    resolve('Resolved value');     // Synchronous call to resolve
//    console.log('Executor end');   // Synchronous, runs immediately
// });

// p1.then(value => {
//    console.log('Promise resolved with:', value);
// });

// console.log('After Promise');

//========================

// Execution Order
// Promise Constructor:

// The Promise is created.
// The executor function runs immediately, so:
// console.log('Executor start') executes.
// resolve('Resolved value') is called, marking the Promise as resolved.
// console.log('Executor end') executes.
// Microtask Queue:

// p1.then is scheduled in the microtask queue because the Promise has resolved.
// Synchronous Code Continues:

// console.log('After Promise') runs.
// Microtask Queue Processes:

// The .then() callback attached to p1 executes, printing:
// Promise resolved with: Resolved value.
// Output
// The above code produces the following output:

// sql
// Copy code
// Executor start
// Executor end
// After Promise
// Promise resolved with: Resolved value
// Key Points About the Flow
// Executor runs immediately:

// All synchronous code inside the executor function runs right away.
// Resolution is asynchronous:

// The .then() or .catch() attached to a resolved Promise runs after all synchronous code in the current execution context completes.
// Microtasks vs. Macrotasks:

// Promise callbacks (.then, .catch) are microtasks and run before tasks in the task queue (e.g., setTimeout).
// Now let's relate this back to your original code. For p1:


// const p1 = new Promise(resolve => {
//    console.log('b');     
//    resolve('c');
// });

// The Promise constructor runs synchronously:
// Prints b.
// Calls resolve('c'), which marks the Promise as resolved.
// The .then() attached to p1 will run later, as a microtask.


//=================================

// example

const t1 = setTimeout(() => {


    console.log('a')
 
 
 }, 0);
 
 
 const p1 = new Promise(resolve => {
 
 
    console.log('b');     
 
 
     resolve('c');
 
 
 });
 
 
 const p2 = Promise.resolve('d');
 
 
 async function f1() {
 
 
    console.log('e');     
 
 
    console.log(await p2);
 
 
    console.log(await p1);
 
 
    console.log('f');
 
 
 }
 
 
 console.log('g');
 
 
 f1();
 
 
 console.log('h');    // b g e h d c f a
 