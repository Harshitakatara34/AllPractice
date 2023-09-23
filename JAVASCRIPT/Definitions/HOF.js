// HOF
// A Higher-Order Function (HOF) is a function that takes one or more functions as arguments or returns a function as its result.


//=====================================


// map
// The `map` Higher-Order Function (HOF) is used to create a new array by applying a given function to each element of an existing array.

//exp
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//==================================================

//filter
// A Higher-Order Function (HOF) that creates a new array by selecting elements from an existing array based on a provided condition.

//exp
// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4, 6]

//============================================

//reduce
// A Higher-Order Function (HOF) that iterates through an array and accumulates its elements into a single value using a specified function

//exp
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // 15


//=============================

//forEach
// A HOF that iterates through an array and performs an action for each element, without creating a new array.


//exp
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });


//=======================================

//sort
// A Higher-Order Function (HOF) in JavaScript used to arrange the elements of an array in ascending or descending order based on a provided comparison function.

//exp
// const numbers = [4, 2, 9, 1, 5];
// numbers.sort((a, b) => a - b); // Sorts 'numbers' in ascending order
// console.log(numbers); // Output: [1, 2, 4, 5, 9]


//=================================
//map
// const numbers = [1, 2, 3, 4, 5];

// const squaredDoubledNumbers = numbers
//   .map(function (number) {
//     return number * 2;
//   })
//   .map(function (number) {
//     return number * number;
//   });

// console.log(squaredDoubledNumbers); // [4, 16, 36, 64, 100]


//===========================
//Find

// Find: A HOF that returns the first element in an array that satisfies a given condition, or undefined if no such element is found.

//exp
// const numbers = [1, 2, 3, 4, 5];
// const target = 3;

// const foundNumber = numbers.find(num => num === target);

// console.log(foundNumber); // Output: 3
