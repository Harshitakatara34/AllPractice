// // // const mySymbol = Symbol();

// // // const namedSymbol = Symbol("mySymbolDescription");

// // // console.log(mySymbol);
// // // console.log(namedSymbol);

// const obj = {};

// // Creating a symbol
// const mySymbol = Symbol('mySymbol');

// // Adding a property using the symbol as the key
// obj[mySymbol] = 'This is a symbol property';

// // Accessing the property using the symbol as the key
// console.log(obj)
// // {[Symbol(mySymbol)]: 'This is a symbol property'}
// console.log(obj[mySymbol]); // Output: This is a symbol property





// // For In Loop will Not work

// const obj = {
//     name: 'John',
//   };
  
//   const privateSymbol = Symbol('privateSymbol');
//   obj[privateSymbol] = 'This is a private property';
  
//   // Enumerating object properties
//   for (let key in obj) {
//     console.log(key); // Output: name
//   }
  
//   // Getting object keys
//   console.log(Object.keys(obj)); // Output: ['name']
  
//   // Accessing the private property using the symbol
//   console.log(obj[privateSymbol]); // Output: This is a private property
  





// const symbol1 = Symbol('mySymbol');
// const symbol2 = Symbol('mySymbol');

// console.log(symbol1 === symbol2); // Output: false (symbols are always unique)


// let sy1 = Symbol('Hi')
// let sy2 = Symbol('Hi')
    
// (sy1 === sy2) ? 'true' : 'false'




// Symbols are always unique
// Define two symbols
const sy1 = Symbol('mySymbol1');
const sy2 = Symbol('mySymbol2');

// Compare the symbols
 (sy1 === sy2) ? 'true' : 'false';

// console.log(result); // This will now work without errors

