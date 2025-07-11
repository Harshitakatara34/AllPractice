






// The cleanup function in useEffect is used to handle tasks like unsubscribing 
// from event listeners, clearing timers, or cleaning up resources when a React 
// component unmounts or when specific dependencies change. 


// It's important to 
// prevent memory leaks and ensure that no lingering effects interfere with the 
// component's behavior or cause unexpected issues.


// Let’s see an example without cleanup:

// jsx
// Copy
// Edit
// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Still running...");
//   }, 1000);
// }, []);
// This setInterval keeps running even if the component unmounts.

// ❌ It logs endlessly.

// ❌ Wastes memory.

// ✅ Fix: Use cleanup:

// jsx
// Copy
// Edit
// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Still running...");
//   }, 1000);

//   return () => clearInterval(interval); // ✅ Memory freed
// }, []);
// Now when the component unmounts:

// clearInterval runs

// Timer is killed

// Memory is freed

// ✅ No memory leak


