// ## How are functions linked to objects in Javascript

// Okay, now we understand that every object has a `__proto__` property which is used to link it to another object. But what about functions? How is prototypal inheritance handled in objects created by constructor functions via `new` keyword?

// Functions are first-class objects in JavaScript which means they can have their own properties and methods like any other plain object could.

// This `prototype` property of a function itself is not used in the prototype chain look-up. The `.prototype` property object lives in every function except arrow functions.



Person.prototype.increaseAge = function() {
    this.age = this.age + 1;
    console.log(this.age);
  }
  
  Person.prototype.sleep = function() {
    console.log(`${this.firstName} is sleeping.`)
  }
  
  Person.prototype.eat = function() {
    console.log(`${this.firstName} is eating.`)
  } 
  
  Person.prototype.introduceSelf = function() {
    console.log(this.firstName, this.lastName, this.age);
  }
  
  
  function Person(firstName, lastName, age) {
    let obj = {};
    Object.setPrototypeOf(obj, Person.prototype);
  
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
  
    return obj;
  }
  
  Object.setPrototypeOf(Employee.prototype, Person.prototype)
  
  Employee.prototype.work = function() {
    console.log(`${this.firstName} is working.`)
  }
  
  Employee.prototype.getSalary = function() {
    console.log(`${this.firstName} is getting Salary.`)
  }
  
  
  function Employee(firstName, lastName, age, department, salary) {
    let obj = Person(firstName, lastName, age);
    Object.setPrototypeOf(obj, Employee.prototype);
  
    obj.department = department;
    obj.salary = salary;
  
    return obj;
  }
  
  let e1 = Employee("John", "Doe", 25, "frontend", 200000);
  console.log(e1.eat())