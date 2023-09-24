// The spread operator explodes array or objects in place
let arr = [1, 3, 5, 7, 9];
console.log(...arr); //-> 1 3 5 7 9

let user = {
  firstName: 'Vivek',
  lastName: 'Agarwal'
}

console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
});
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}


// Rest Operator (...): Gathers multiple values into an array.

// Spread Operator (...): Spreads an array or object into individual values.