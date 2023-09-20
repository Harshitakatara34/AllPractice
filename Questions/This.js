// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     getFullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
//   var fullName = person.getFullName();
//   console.log(fullName);

//  #######################################################################################################################################



//   function greet() {
//     console.log("Hello, " + this.name);
//   }
  
//   var person = { name: "John" };
//   var greetJohn = greet.bind(person);
//   greetJohn();
  
//   ##################################################=====================================#######################3


var person = {
    name: "Alice",
    sayHello: function() {
      setTimeout(function() {
        console.log("Hello, " + this.name);   // hello ,undefined
      }, 1000);
    }
  };
//   When you use setTimeout with a regular function (not an arrow function), it creates a new function 
//   scope, and the this value inside that new function is not automatically bound to the person object. 
//   Instead, it defaults to the global object (in a browser environment, this would typically be the window object).
  
  person.sayHello();

// ##################################====================================================================###########################

// this in arrow function 
var person = {
    name: "Alice",
    sayHello: function() {
      setTimeout(()=> {
        console.log("Hello, " + this.name);   // hello ,Alice
      }, 1000);
    }
  };
  person.sayHello()



//   ########################========================================================================##############################

var obj = {
    value: 42,
    foo: function() {
      console.log(this.value);
      function bar() {
        console.log(this.value);
      }
      bar();
    }
  };
  obj.foo();   /// 42 undefined
  
//   #################################=======================================##########################################

var obj = {
    value: 42,
    foo: function() {
      console.log(this.value);
      var bar = () => {
        console.log(this.value);
      };
      bar();
    }
  };
  obj.foo();  // 42 42 

//   #########################################=========================================########################################

function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log("Hello, " + this.name);
    };
  }
  
  var person1 = new Person("Alice");
  var person2 = new Person("Bob");
  person1.sayHello();
  person2.sayHello();   // Hello Alice
  // Hello Bob
  
  



