// function f1(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   function f2(n, a) {
    
//     // hint: we are invoking f2 with the new keyword
//     // attach name & age to this without changing anything in f1
//     // use .call
//     console.log(this)
//     f1.call(this,n,a)
//   }
  
//   let j = new f2('John', 20); 
//   console.log(j)








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
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  Object.setPrototypeOf(Employee.prototype, Person.prototype)
  
  Employee.prototype.work = function() {
    console.log(`${this.firstName} is working.`)
  }
  
  Employee.prototype.getSalary = function() {
    console.log(`${this.firstName} is getting Salary.`)
  }
  
  
  function Employee(firstName, lastName, age, department, salary) {
    Person.call(this,firstName, lastName, age);
    this.department = department;
    this.salary = salary;
  }
  
  let e1 = new Employee("John", "Doe", 25, "frontend", 200000);
  console.log(e1);
  e1.eat();