// function Person(name) {
//     this.name = name;
//   };
  
//   Person.prototype.sayHello = function () {
//     console.log(this.name, ' hello!');
//   }
  
//   let p1 = new Person('Vivek');
//   p1.sayHello();
  
//   function Teacher(name, subject) {
//     // we know that Teacher will be called with the new keyword
//     // so assume it already has an empty object called `this` which will be 
//     // returned at the end of the function
  
//     // the objects created with the Teacher function must 
//     // have a property called `subject`


//     this.subject = subject;
  
//     // notice that we are not calling Person() with the new keyword
//     // we are using it as a simple function
//     // Using call, we are passing it our new `this` object and
//     // the `Person()` function will stick the `name` property to `this` object


//     Person.call(this, name);
  
//     // a new object with `subject` and `name` poperty will be returned
//     // if the `Teacher()` function is called using the `new` keyword
//   }
  
//   // linking the prototype of Teacher to Person so that the 
//   // teacher has access to all the methods of a Person
//   Object.setPrototypeOf(Teacher.prototype, Person.prototype);
  
//   // Adding more methods to the `prototype` property of `Teacher()`
//   // all teachers need to teach. 
//   Teacher.prototype.teach = function () {
//     console.log(this.name, 'Teaching');
//   }
  
//   // creating a new teacher
//   let t1 = new Teacher('Monika', 'Glopo');
//   t1.sayHello()
//   t1.teach()
  
//   console.log(t1);
  
//   // teacher object's `__proto__` should be linked to `Teacher.prototype`
//   console.log(t1.__proto__ === Teacher.prototype);
  
//   // teacher's constructor should be Teacher()
//   console.dir(t1.constructor);
  
//   // Teacher.prototype's __proto should be linked to Person.prototype
//   console.log(Teacher.prototype.__proto__ === Person.prototype);