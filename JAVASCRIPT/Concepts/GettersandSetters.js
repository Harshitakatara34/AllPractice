// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.salary = 5000;
//     }
  
//     // getter
//     get fullName() {
//       return `${this.name} Doe`;
//     }
  
//     // setter
//     set fullName(name) { 
//         // name=jane Smith
//       this.name = name.split(" ")[0];
//     }
//   }
  
//   const john = new Person("John", 30);
  
//   // are we trying to get a value or set a value
//   console.log(john.fullName); // get
  
//   // are we trying to get a value or set a value
//   john.fullName = "Jane Smith"; // set
  
//   // get a value or are we trying to get a value
//   console.log(john.name);













class Person {
    #age;    ///private variable we can't accesss it outside the class
  
    constructor(name, age) {
      this.name = name;
      this.#age = age;
     
    }
   
    get age() {
        return this.#age;

      }
     
  }
  
  const john = new Person("John", 30);
  console.log(john)
  console.log(john.age); // 30
//   console.log(john.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class