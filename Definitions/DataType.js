1.// What is Datatype in javaScript?

// A data type in programming defines the kind of data a variable can hold, specifying its format and allowable operations.


//=======================

2.//Primitive Data Types:

// Primitive data types in JavaScript are immutable, simple data types that hold a single value each, such as numbers, strings, and booleans.
// string, number, boolean, undefined, null, bigInt, symbol

3.//Non-primitive:

//  data types are complex, mutable data structures like objects and arrays that can hold multiple values and are manipulated by reference.
//object, array, function


//============================

4.//## Dynamic Typing

// using the `typeof` operator to check types & change them dynamically (with two exeptions)



// example datatypes difference premitive and non premitive

// //================
// let str1= 3
// let str2 = str1
// str2 = 3
// console.log(str1===str2)  // false

// //=============


// const ar = [1,3,45]
// const ar2 = ar
// ar2.push(4)

// console.log(ar===ar2) //true