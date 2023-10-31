console.log('Hello t1');                 

setTimeout(() => {
    console.log('Hello t2');
}, 1000);

Promise.resolve().then((val) => {
    console.log('Promise Output');
});

console.log('Hello t3');

// Output
// Hello t1
// Hello t3
// Promise Output
// Hello t2







// microtasks (such as those created by promises) are prioritized over macrotasks (such as setTimeout callbacks) in the event loop. 

//microtasks (like promise callbacks) execute before macrotasks (like setTimeout callbacks):

// Event Loop Priority: The JavaScript event loop has a fixed priority order when processing different types of tasks. Microtasks are at a higher priority level than macrotasks. The event loop always checks the microtask queue before proceeding to the macrotask queue.

//=================
//Execution part============








//Microtask Queue: Microtasks, including promise callbacks (.then() and .catch()), are added to the microtask queue. When the call stack is empty (i.e., there are no synchronous tasks being executed), the event loop checks the microtask queue for tasks to execute.

//Macrotask Queue: Macrotasks, such as those created by setTimeout, are added to the macrotask queue. The event loop checks this queue only after it has cleared all available microtasks from the microtask queue.

//======================

// output

//Hello t1
//Hello t3
//Promise Output
////Hello t2