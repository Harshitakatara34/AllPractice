// rest operator helps collect all the arguments in an array
function doSomething(first, second, ...rest) {
    console.log(first, second, rest); // rest is guarenteed to be an array
  }
  
  doSomething('one', 'two', 'three', 'four', 'five');




// If ... appears on the right side (RHS) of assignment or while calling a function →
// It is Spread.
// If ... appears on the left side (LHS) in function parameters or destructuring →
// It is Rest.
  
// Rest Operator (...): Gathers multiple values into an array.

// Spread Operator (...): Spreads an array or object into individual values.