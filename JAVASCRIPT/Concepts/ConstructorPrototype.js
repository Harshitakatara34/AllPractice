// Convert this factory function to a constructor function
// convention: PascalCase

Animal.prototype.eat = function() {
    console.log(`eating...`)
  }
  
  function Animal(noOfLegs, vegetarian) {
    // let this = {}; # 1
    // Object.setPrototypeOf(obj, Animal.prototype) #3
  
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
    // return this; #2
  }
  
  let a1 = new Animal(4, true);
  console.log(a1);
  a1.eat();
  
  
  Object.setPrototypeOf(Cat.prototype, Animal.prototype)
  
  Cat.prototype.meow = function() {
    console.log('Meow....')
  }
  
  function Cat(noOfLegs, vegetarian, color) {
    // #1. a this obj was created 
    // #3. a prototype chain was created between the new obj and the functions
    // prototype object
    Animal.call(this, noOfLegs, vegetarian)
    this.color = color;
    // #2. the this obj was returned
  }
  
  let c1 = new Cat(4, false, 'Brown');
  console.log(c1);
  c1.eat();
  c1.meow();