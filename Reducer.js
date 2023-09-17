let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let sum=arr.reduce((acc,elem)=>{
  return acc+elem.age
},0)
console.log(sum)