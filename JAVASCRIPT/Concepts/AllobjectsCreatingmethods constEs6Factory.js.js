/// Constructor Function
// function Animal(noOfLegs, vegetarian) {
//     this.noOfLegs = noOfLegs;
//     this.vegetarian = vegetarian;
  
//     this.eat = function() {
//       console.log('eating...');
//     }
  
//     this.greet = function() {
//       console.log(`Hi, I have ${this.noOfLegs} legs.`);
//     }
//   }
  
//   // Example invocation
//   let a1 = new Animal(4, true);
//   console.log(a1);
//   a1.eat();  // eating...
//   a1.greet(); // Hi, I have 4 legs.




//Factory Function
// function animal(noOfLegs, vegetarian) {
//     let obj = {};
  
//     obj.noOfLegs = noOfLegs;
//     obj.vegetarian = vegetarian;
  
//     obj.eat = function() {
//       console.log('eating...')
//     }
  
//     obj.greet = function() {
//       console.log(`Hi, I have ${obj.noOfLegs} legs.`)
//     }
  
//     return obj;
//   }
  
//   // example invocation
//   let a1 = animal(4,true);
//   console.log(a1)
//   a1.eat() // eating...
//   a1.greet() // Hi, I have 4 legs.



//ES6
// class Animal{
//     constructor(t,d,c){
//       this.t=t
//       this.d=d
//       this.c=c
    
//   }
//     tempo=()=>{
//     console.log("tempo")
//     }
  
//   }
//   let store=new Animal(1,2,3)
//   console.log(store)
  