let shapes = [
  { sides: 4, color: "red" },
  { sides: 3, color: "blue" },
  { sides: 4, color: "blue" },
  { sides: 3, color: "red" },
];

//   shapes.sort(function(a, b) {
//     return a.color.localeCompare(b.color);
//   });

shapes.sort((a, b) => {
  return b.color.localeCompare(a.color);
});

console.log(shapes);

// Output: [
//   {sides: 3, color: 'blue'},
//   {sides: 4, color: 'blue'},
//   {sides: 3, color: 'red'},
//   {sides: 4, color: 'red'}
// ]

//   [
//     { sides: 4, color: 'red' },
//     { sides: 3, color: 'red' },
//     { sides: 3, color: 'blue' },
//     { sides: 4, color: 'blue' }
//   ]

// localeCompare

// In the code you provided, localeCompare is a JavaScript method used to compare two strings based on their
// Unicode values in a locale-sensitive manner. It is often used for sorting strings alphabetically, taking into account language-specific sorting rules and character comparisons.

//Prototype is a object - chain function to object.

let ag = [1, 3, 4];

console.log(ag);

// Object.prototype
// Array.prototype

// both are properties
