
// The event loop is a JavaScript mechanism that ensures non-blocking and efficient execution of code, 
// handling asynchronous tasks like callbacks and promises.


// It provides efficient execution of code without blocking the code .




      

// Heap===>Memory alloccate krte h
// Call Stack===>isme jaate h function stack m 
// WebApi===>asynchronous operation rehte h
// Task Queue===>task queue m asynchronous ka callback jaega
// Event Loop==> jab stack khali hota h to event loop task queue k call back jaenge 







// Asynchornous function m humesha ek callback jarroor hota h 





//           ⬇️  Synchronous Code
// +----------------------+
// |      Call Stack      |  ← Executes code line-by-line
// +----------------------+
//           ⬇️  Async tasks register with browser (Web APIs)
// +----------------------------+
// |     Web APIs / Browser     |  ← Handles setTimeout, fetch, DOM, etc.
// +----------------------------+
//           ⬇️  
// +----------------------+
// |   Microtask Queue    |  ← Handles Promises, queueMicrotask, async/await
// +----------------------+
//           ⬇️  
// +----------------------+
// |   Macrotask Queue    |  ← Handles setTimeout, setInterval, I/O, UI events
// +----------------------+
//           ⬇️  
// +----------------------+
// |      Event Loop      |  ← Continuously checks if Call Stack is empty
// +----------------------+
//           ⬆️  
//     Pulls tasks from microtasks FIRST, then ONE from macrotask
