 // It is Blocking concept 
 
 // #####################==============================================##################

  // for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 5 5 5 5 5          


// ########################=============================================#############################
  // for (let i = 0; i < 5; i++) {
//   setTimeout(() => {                        here let works in block scope
//     console.log(i);
//   }, 1000);
// }
// 0 1 2 3 4 



// Because of the event queue in JavaScript, the setTimeout callback function is called after the 
// loop has been executed. Since the variable i in the first loop was declared using the var keyword, 
// this value was global. During the loop, we incremented the value of i by 1 each time, using the unary 
// operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.



// In the second loop, the variable i was declared using the let keyword: variables declared with the let 
// (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have
//  a new value, and each value is scoped inside the loop.