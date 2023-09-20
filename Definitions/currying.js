// Currying is a functional programming concept where a function that takes multiple arguments 
// is transformed into a series of functions that each take a single argument. 
// This allows for partial function application and more flexible, composable code.


// function curry(func) {

    
//   return function curried(...args) { 
                                    
//     if (args.length >= func.length) {
//       return func(...args);
//     }
//     else {
//       return function(...moreArgs) { 
//           console.log(...moreArgs)  
//         return curried(...args, ...moreArgs);
//       };               
//     }
//   };
// }

// function addThreeNumbers(a, b, c) {
//   return a + b + c;
// }




// const curriedAdd = curry(addThreeNumbers);
// console.log(curriedAdd(1)(2)(3))