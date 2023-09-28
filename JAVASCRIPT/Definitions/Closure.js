//Closure (JavaScript):


//A closure is a function that retains access to variables from its outer scope even after the outer function has finished executing.
// example===>UseEffect








//example
// function outerFunction() {
//     const outerVariable = "I am from the outer function";
  
//     function innerFunction() {
//       console.log(outerVariable); // Accessing outerVariable from the enclosing scope
//     }
  
//     return innerFunction; // Return the inner function
//   }
  
//   const closure = outerFunction(); // Call outerFunction and store its return value (innerFunction) in closure
//    // Call closure, which still has access to outerVariable
//   console.log(closure()) //I am from the outer function


//example-2

// function createCounter() {
//     let count = 0; // The count variable is part of the closure
  
//     function increment() {
//       count++;
//       console.log(`Count: ${count}`);
//     }
  
//     function decrement() {
//       count--;
//       console.log(`Count: ${count}`);
//     }
  
//     return {
//       increment,
//       decrement,
//     };
//   }
  
//   const counter = createCounter(); // Create a counter object with increment and decrement methods
//   counter.increment(); // Output: Count: 1
//   counter.increment(); // Output: Count: 2
//   counter.decrement(); // Output: Count: 1
  
