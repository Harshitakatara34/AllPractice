
// ES6

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHello() {
//       return this.name + ' the Person, says Hello';
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, subject) {
//       super(name);
//       this.subject = subject;
//     }
  
//     teach() {
//       return  this.name + ' the Teacher, teaches ' + this.subject;
//     }
//   }
  
//   class Engineer extends Person {
//     constructor(name) {
//       super(name);
//     }
  
//     earn() {
//       return  this.name + ' the Engineer, makes money.';
//     }
//   }

//   const teacher = new Teacher('Alice', 'Math');
//   console.log(teacher)
// console.log(teacher.sayHello()); // Output: Alice the Person, says Hello
// console.log(teacher.teach()); // Output: Alice the Teacher, teaches Math

// const engineer = new Engineer('Bob');
// console.log(engineer)
// console.log(engineer.sayHello()); // Output: Bob the Person, says Hello
// console.log(engineer.earn()); // Output: Bob the Engineer, makes money.






// // #################---------------------------------------------------------------------#################
// // convert the following factory function to an ES6 class
// function animal(noOfLegs, vegetarian) {
//   let obj = {};

//   obj.noOfLegs = noOfLegs;
//   obj.vegetarian = vegetarian;

//   obj.eat = function() {
//     console.log('eating...')
//   }

//   obj.greet = function() {
//     console.log(`Hi, I have ${obj.noOfLegs} legs.`)
//   }

//   return obj;
// }

// // example invocation
// let a1 = new animal(4,true);
// console.log(a1)
// a1.eat() // eating...
// a1.greet() // Hi, I have 4 legs.





// Ans.

// ES6 Class 
// class Animal {
//   constructor(noOfLegs, vegetarian) {
//     this.noOfLegs = noOfLegs;
//     this.vegetarian = vegetarian;
//     this.eat=()=> {
//     console.log('eating...');
//   }

//   this.greet=()=> {
//     console.log(`Hi, I have ${this.noOfLegs} legs.`);
//   }

//   }

//   }

// // Example invocation
// let a1 = new Animal(4, true);
// console.log(a1);
// a1.eat(); // eating...
// a1.greet(); // Hi, I have 4 leg




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

