
// **Question 1:**

// What will be the output of the following JavaScript code?

// console.log(typeof([]));


// A) "array"  
// B) "object"  
// C) "undefined"  
// D) "null"

// **Answer: B) "object"**


// //==================

// **Explanation:** In JavaScript, arrays are a type of object.

// **Question 2:**

// Which of the following statements correctly creates a new array in JavaScript?

// A) `let arr = new Array();`  
// B) `let arr = [];`  
// C) `let arr = {}[];`  
// D) `let arr = () => [];`

// **Answer: B) `let arr = [];`**


// //================================


// **Explanation:** Option B initializes a new empty array.

// ---

// **Question 3:**

// What does the `typeof` operator return when used on `null`?

// A) "undefined"  
// B) "null"  
// C) "object"  
// D) "string"

// **Answer: C) "object"**


// //================================

// **Explanation:** `typeof null` returns "object" in JavaScript, which is considered a quirk in the language.


// **Question 4:**

// What will be the output of the following code?

// ```javascript
// let x = 10;

// function foo() {
//   console.log(x);
// }

// foo();


// A) 10  
// B) Undefined  
// C) ReferenceError  
// D) 0

// **Answer: A) 10**


// //=============================

// **Explanation:** The function `foo` can access the variable `x` in its surrounding scope.

// **Question 5:**

// What will be the output of the following code?


// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a);


// A) [1, 2, 3, 4]  
// B) [1, 2, 3]  
// C) [1, 2, 3, 4, 4]  
// D) Error

// **Answer: A) [1, 2, 3, 4]**

// **Explanation:** Both `a` and `b` point to the same array in memory, so modifying `b` also affects `a`.



// //================================



// **Question 6:**

// What will be the output of the following code?


// const x = 5;

// function test() {
//   console.log(x);
//   const x = 10;
// }

// test();

// A) 5  
// B) 10  
// C) ReferenceError  
// D) Undefined

// **Answer: C) ReferenceError**


// //================================

// Question 4:

// What does the === operator in JavaScript do?

// A) It assigns a value to a variable.
// B) It compares two values for equality without type conversion.
// C) It performs a bitwise comparison of two values.
// D) It checks if a variable is defined.

// Answer: B) It compares two values for equality without type conversion.

// Explanation: The === operator in JavaScript performs a strict comparison, checking both the value and the type of the operands.



//================================

// Question 6:

// What is the purpose of the localStorage object in JavaScript?

// A) To store data in a server database.
// B) To store data temporarily on the client's browser.
// C) To store data in a cookie.
// D) To store data on the server.

// Answer: B) To store data temporarily on the client's browser.

// Explanation: The localStorage object in JavaScript is used to store data on the client's browser temporarily.



//====================================


// console.log(typeof n)  // undefined


//=========================

// Question 2:

// What is the purpose of the JavaScript Promise object?

// A) To handle exceptions and errors.
// B) To represent a value that might be available now or in the future.
// C) To create asynchronous functions.
// D) To declare and initialize variables.

// Answer: B) To represent a value that might be available now or in the future.

// Explanation: Promises are used for asynchronous operations and represent a value that might be available now or in the future, or it might not be available at all.


//=================================

// Question 3:

// Which JavaScript feature is used to iterate through the properties of an object?

// A) forEach
// B) for...in loop
// C) map
// D) reduce

// Answer: B) for...in loop

// Explanation: The for...in loop is used to iterate through the properties of an object.



//===================================

// Question 6:

// What does the JavaScript bind method do when applied to a function?

// A) It creates a new function with a different name.
// B) It binds a function to a specific object, allowing it to be called in the context of that object.
// C) It immediately invokes the function.
// D) It returns the length of the function.

// Answer: B) It binds a function to a specific object, allowing it to be called in the context of that object.

// Explanation: The bind method is used to create a new function that, when called, has its this keyword set to a specific object.


//==============================

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('one'), 1000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('two'), 2000);
//   });
  
//   Promise.race([promise1, promise2])
//     .then(result => console.log(result));
  
// A) "one"
// B) "two"
// C) "one" and then "two"
// D) "two" and then "one"

// Answer: A) "one"

// Explanation: Promise.race resolves with the first promise that is resolved, so it logs "one" when promise1 resolves after 1000ms.


