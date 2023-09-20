// When dealing with `setTimeout` inside a function, especially when using variables from the function's scope, there are three important things to remember:

// function student() {
//     let firstName = 'Vivek';
    
//     setTimeout(()=>{
//       console.log('from setTimeouts CB:', firstName);
//     },2000)
    
//     return firstName; 
//   }
  
//   console.log('student Invoked:' , student())



//Explanation
// 1. **Closure**: JavaScript closures capture variables from their containing scope, even if the function is executed later. In your example, the `setTimeout` callback function captures the `firstName` variable from the `student` function's scope.

// 2. **Asynchronous Execution**: `setTimeout` is asynchronous, so the code inside the callback function will not execute immediately. In your example, there will be a delay of 2 seconds (2000 milliseconds) before the callback is executed.

// 3. **Return Value**: In your code, `student()` returns the `firstName` immediately before the `setTimeout` callback is executed. Therefore, when you log the return value of `student()`, it will display the value of `firstName` at that moment, which is `'Vivek'`.

// student Invoked: Vivek
// from setTimeouts CB: Vivek

