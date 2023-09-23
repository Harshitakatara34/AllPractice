console.log(a); //Undefined
var a = 10;

function foo() {
  console.log(b); // Undefined
  var b = 20;
}

foo();


// hoisting is the default property in javascript that makes declaration at the topof our code 