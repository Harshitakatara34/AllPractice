// rest operator helps collect all the arguments in an array
function doSomething(first, second, ...rest) {
    console.log(first, second, rest); // rest is guarenteed to be an array
  }
  
  doSomething('one', 'two', 'three', 'four', 'five');





  
// Rest Operator (...): Gathers multiple values into an array.

// Spread Operator (...): Spreads an array or object into individual values.