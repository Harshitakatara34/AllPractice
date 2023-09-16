
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      return this.name + ' the Person, says Hello';
    }
  }
  
  class Teacher extends Person {
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }
  
    teach() {
      return  this.name + ' the Teacher, teaches ' + this.subject;
    }
  }
  
  class Engineer extends Person {
    constructor(name) {
      super(name);
    }
  
    earn() {
      return  this.name + ' the Engineer, makes money.';
    }
  }

  const teacher = new Teacher('Alice', 'Math');
  console.log(teacher)
console.log(teacher.sayHello()); // Output: Alice the Person, says Hello
console.log(teacher.teach()); // Output: Alice the Teacher, teaches Math

const engineer = new Engineer('Bob');
console.log(engineer)
console.log(engineer.sayHello()); // Output: Bob the Person, says Hello
console.log(engineer.earn()); // Output: Bob the Engineer, makes money.
