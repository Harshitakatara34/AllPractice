animal.prototype.eat = function() {
    console.log(`eating...`)
  }
  
  function animal(noOfLegs, vegetarian) {
    let obj = {};
    Object.setPrototypeOf(obj, animal.prototype)
  
    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian;
  
    return obj;
  }
  
  Object.setPrototypeOf(cat.prototype, animal.prototype)
  
  cat.prototype.meow = function() {
    console.log('Meow....')
  }
  
  function cat(noOfLegs, vegetarian, color) {
    let obj = animal(noOfLegs, vegetarian);
    Object.setPrototypeOf(obj, cat.prototype);
  
    obj.color = color;
  
    return obj;
  }
  
  let c1 = cat(4, false, 'Black');
  
  console.log(c1)
  
  c1.meow()
  c1.eat()