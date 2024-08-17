let obj = { 1: 2 };
let obj2 = { 1: 2 };
// the == operator should not evaluate to true for two distinct object literals, even if their content
// is the same. It should evaluate to false. This is because the == operator checks if two objects
// reference the same object in memory.
console.log(obj == obj2); //false

let obj3 = { 1: 2 };
let obj4 = obj3;
console.log(obj4 == obj3); //true
// referencing the same content in the memory

let d = 2;
let t = d;
console.log(d === t); //true

//LET ,Const  ===> Block Scoped
// Var==> Function Scoped
