// Hoisting
// The movement of variable declaration to top of scope - before execution

// or

// Variable and function declarations are moved to the top of their containing scope during code execution.

// Example

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 5 5 5 5 5

 // or

 let name = 'john';

sayHi() // valid

function sayHi(){
  let greet = "hi"
  console.log(name)
}


// or  HOSTING FAIL

//===============
// script - sayHii - undefined
debugger;
sayHii()   // ReferenceError: sayHii is not defined
let sayHii = ()=>{
  console.log('Hello World!!')
}




