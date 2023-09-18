// Factory function
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