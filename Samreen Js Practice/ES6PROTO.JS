class Person {
    constructor(name){
      this.name = name;
    }
  
    sayHello() {
      console.log(this.name, 'says Hello');
    }
  }
  
  let person1 = new Person('Vivek');
  person1.sayHello();
  
  class Teacher extends Person{
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }
  
    teach() {
      console.log(this.name, 'is Teaching ', this.subject);
    }
  }
  
  let teacher1 = new Teacher('Akash', 'Science');
  teacher1.sayHello();
  teacher1.teach();
  
  console.log(teacher1); 
  console.log(Teacher.prototype) 
  console.log(teacher1.__proto__) 
  console.log(person1)
  console.log(Teacher.prototype.__proto__)
  console.log(person1.__proto__)
  console.log(Person.prototype.__proto__.__proto__)
  
  
  // console.log(teacher1.__proto__ === Teacher.prototype);
  // console.log(Teacher.prototype.__proto__ === Person.prototype);