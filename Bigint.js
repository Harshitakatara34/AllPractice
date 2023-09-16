// // the "n" at the end means it's a BigInt
// const aVeryBigNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof aVeryBigNumber)

// console.log(1.2345678901234568*(10**39))


let passcodeSym = Symbol('passcode');
let roleSym = Symbol.for('role');

let obj = {
  name: 'John doe',
  age: 36,
  [passcodeSym]: 'world',
  [roleSym]: 'trainee'
}

obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor

console.log(obj.passcodeSym); // undefined

console.log(obj[passcodeSym])

console.log(Object.getOwnPropertyNames(obj)); // (2) ['name', 'age']

for (const key in obj) {
  console.log(key);
}
// name
// age

// console.log(Object.keys(obj))  [ 'name', 'age' ]
// console.log(Object.entries(obj))   [ [ 'name', 'John doe' ], [ 'age', 36 ] ]
console.log(JSON.stringify(obj))