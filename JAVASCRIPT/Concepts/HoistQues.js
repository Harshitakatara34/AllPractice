console.log(a); //Undefined
var a = 10;

function foo() {
  console.log(b); // Undefined
  var b = 20;
}

foo();




let a = 1;
function test() {
  console.log(a);
  let a = 2;
}
test();
//undefined

// hoisting is the default property in javascript that makes declaration at the topof our code 