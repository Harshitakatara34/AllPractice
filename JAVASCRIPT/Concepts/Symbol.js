<<<<<<< HEAD
// A unique and immutable data type in JavaScript used for creating property keys that are guaranteed to be unique.
=======


// let passcodeSym = Symbol('passcode');
// let roleSym = Symbol.for('role');

// let obj = {
//   name: 'John doe',
//   age: 36,
//   [passcodeSym]: 'world',
//   [roleSym]: 'trainee'
// }

// obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
// obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor

// console.log(obj.passcodeSym); // undefined

// console.log(obj[passcodeSym])

// console.log(Object.getOwnPropertyNames(obj)); // (2) ['name', 'age']



// //For Symbols
// // console.log(Object.getOwnPropertySymbols(obj));
// // // (3) [Symbol(passcode), Symbol(role), Symbol(passcode)]

// // console.log(Reflect.ownKeys(obj));
// // //(5) ['name', 'age', Symbol(passcode), Symbol(role), Symbol(passcode)]

// for (const key in obj) {
//   console.log(key);
// }
// // name
// // age

// // console.log(Object.keys(obj))  [ 'name', 'age' ]
// // console.log(Object.entries(obj))   [ [ 'name', 'John doe' ], [ 'age', 36 ] ]
// console.log(JSON.stringify(obj))




//===================================================================






>>>>>>> 1197e7787cd574ffbac250b73cc47627e3e4cb12


//Creating Symbol
const mySymbol = Symbol();

//Creating Symbol with some description
const namedSymbol = Symbol("mySymbolDescription");

// console.log(mySymbol);
// console.log(namedSymbol);

// ##--------------------------------------##

//Symbol In Object
const obj = {};
// Creating a symbol
const mySymbol1 = Symbol("mySymbol");
// Adding a property using the symbol as the key
obj[mySymbol1] = "This is a symbol property";
// Accessing the property using the symbol as the key
// console.log(obj)
// // // console.log(obj[mySymbol]); // Output: This is a symbol property

// ##-------------------------------------------------------------------------------------##

// For In Loop will Not work

const obj = {
  name: "John",
};

const privateSymbol = Symbol("privateSymbol");
obj[privateSymbol] = "This is a private property";

// Enumerating object properties
for (let key in obj) {
  console.log(key); // Output: name
}
// Getting object keys
  console.log(Object.keys(obj)); // Output: ['name']

// Accessing the private property using the symbol
  console.log(obj[privateSymbol]); // Output: This is a private property




  // ##--------------------------------------------------------------------------------------##
  // Symbols Are Unique

const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');

console.log(symbol1 === symbol2); // Output: false (symbols are always unique)



// ##--------------------------------------------------------##
// Symbol.for and Symbol
let passcodeSym = Symbol('passcode');
let roleSym = Symbol.for('role');

let obj = {
  name: 'John doe',
  age: 36,
  [passcodeSym]: 'world',
  [roleSym]: 'trainee'
}

obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor




// ####-----------------------------------------------------------------------##

















//Creating an object and inside that object there is one function and we are adding the key in 
// that object by the addData function

const feelingData = {
  tem: "hi", // Property with the key 'tem' and value 'hi'
  addData: function (name, feeling) {
    console.log(feelingData.tem); // Accessing the 'tem' property of the feelingData object
    console.log(this);
    //   Setting a property on the feelingData object using the 'name' parameter as the key and the 'feeling' parameter as the value
    this[name] = feeling;
  },
};

//   Calling the addData method to add data to the feelingData object
feelingData.addData("John", "bad");
  feelingData.addData('Michael', 'good');
  feelingData.addData('John', 'bad');
  feelingData.addData('John', 'great');
  feelingData.addData('mu', 'great');
console.log(feelingData);




// ####---------------------------------------------------------------------------------------##


// these property will not work on Symbol

// let passcodeSym = Symbol('passcode');
// let roleSym = Symbol.for('role');

let obj = {
  name: 'John doe',
  age: 36,
  [passcodeSym]: 'world',
  [roleSym]: 'trainee'
}

obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor

console.log(obj.passcodeSym); // undefined

console.log(obj[passcodeSym])

console.log(Object.getOwnPropertyNames(obj)); // (2) ['name', 'age']

for (const key in obj) {
  console.log(key);
}
// name
// age

console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(JSON.stringify(obj))




//Constructor

// Define a constructor function for creating Person objects

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    // A method to display the full name of the person
    this.fullName = function () {
      return `${this.firstName} ${this.lastName}`;
    };
  }

  // Create instances of the Person object
  const person1 = new Person('John', 'Doe');
  const person2 = new Person('Jane', 'Smith');

  // Access properties and methods of the instances
  console.log(person1);
  console.log(person2);
  console.log(person1.firstName); // Output: 'John'
  console.log(person2.lastName);  // Output: 'Smith'
  console.log(person1.fullName()); // Output: 'John Doe'
  console.log(person2.fullName()); // Output: 'Jane Smith'
