// Factory Function 
// Animal
//     ├── noOfLegs <number>
//     ├── vegetarian <boolean>
//     └── eat() <function that logs `eating...` >

// Write a factory function that can be used to create animal objects in bulk quantity. 

// every animal oject must have 2 properties: noOfLegs, vegetarian
// every animal must have 2 methods
// eat() // console.log(`eating...`)
// greet() // console.log(`Hi, I have <noOfLegs> legs.`)

// function animal(noOfLegs, vegetarian) {
//     let obj={}
//     obj.noOfLegs=noOfLegs
//     obj.vegetarian=vegetarian
//     obj.eat=function(){
//       console.log("eating.....")
//     }
//     obj.greet=function(){
//       console.log(`Hi,I have Legs`)
//     }
//     return obj
//   }
  
//   // example invocation
//   let a1 = animal(4,true);
//   console.log(a1.eat())
  // a1.eat() // eating...
  // a1.greet() // Hi, I have 4 legs.




  // Constructor Function(First Method)
//   function Animal(noOfLegs, vegetarian) {
//     this.noOfLegs = noOfLegs;
//     this.vegetarian = vegetarian;
  
//     this.eat = function() {
//       console.log('eating...')
//     }
  
//     this.greet = function() {
//       console.log(`Hi, I have ${this.noOfLegs} legs.`)
//     }
//   }
  
//   // example invocation
//   let a1 = new Animal(4,true);
//   console.log(a1)
//   a1.eat() // eating...
//   a1.greet() // Hi, I have 4 legs.


// Constructor Function (Second Method by using Prototype)

/// By contructor using prototype etc 

// function Animal(noOfLegs, vegetarian) {
//   this.noOfLegs = noOfLegs;
//   this.vegetarian = vegetarian;
// }

// Animal.prototype.eat = function() {
//   console.log('eating...');
// };

// Animal.prototype.greet = function() {
//   console.log(`Hi, I have ${this.noOfLegs} legs.`);
// };

// // Example invocation
// let a1 = new Animal(4, true);
// console.log(a1);
// a1.eat(); // eating...
// a1.greet(); // Hi, I have 4 legs.
















// ES6 class
// convert the following factory function to an ES6 class

// class Animal {
//     constructor(noOfLegs, vegetarian) {
//       this.noOfLegs = noOfLegs;
//       this.vegetarian = vegetarian;
  
//       this.eat = function () {
//         console.log("eating...");
//       };
  
//       this.greet = function () {
//         console.log(`Hi, I have ${this.noOfLegs} legs.`);
//       };
//     }
//   }
  
//   // example invocation
//   let a1 = new Animal(4, true);
//   console.log(a1);
//   a1.eat(); // eating...
//   a1.greet(); // Hi, I have 4 legs.











