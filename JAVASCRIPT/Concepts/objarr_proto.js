// __proto__ is used to access the prototype chain of an existing 
// object (not recommended for normal use), while prototype is used 
// with constructor functions to set up a prototype chain for objects 
// created by that constructor, allowing them to share properties and methods.





// _proto__ to set the prototype chain, it's strongly recommended to use 
// the standard and well-documented mechanisms, such as constructor functions 
// and their prototype property, for creating and managing prototype chains. 
// This approach is widely supported, more predictable, and easier to work with 
// in the long run.







// console.log(obj.__proto__) {constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …}
// console.log(Object.prototype){constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …}

// console.log(obj.__proto__.__proto__) //null
// console.log(Object.prototype.__proto__)//null

// console.log(arr.__proto__)   [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// console.log(Array.prototype) [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]


// console.log(arr.__proto__.__proto__)  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log(Array.prototype.__proto__)  {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// console.log(arr.__proto__.__proto__.__proto__)//null
// console.log(Array.prototype.__proto__.__proto__) //null





// function objectCreator1(o) {
//     let obj = o; 
    
//     obj.property1 = 1;
//     obj.property2 = 2;
//     obj.property3 = 3;
//     obj.property4 = 4;
//     obj.property5 = 5;
    
//     return obj;
//   }
  
//   function objectCreator2() {
//     let obj = {}; // you cannot touch this line
    
//     objectCreator1(obj);
    
//     // obj.property1 = 1;
//     // obj.property2 = 2;
//     // obj.property3 = 3;
//     // obj.property4 = 4;
//     // obj.property5 = 5;
//     obj.property6 = 6;
    
//     return obj;
//   }
  
//   console.log(objectCreator2())














// make objectCreator2 DRY
// you may make modifications to objectCreator1 if required
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the obj in objectCreator2


// function objectCreator1(a, b, c, d, e) {
//     let obj1 = {};
    
//     obj1.property1 = a;
//     obj1.property2 = b;
//     obj1.property3 = c;
//     obj1.property4 = d;
//     obj1.property5 = e;
    
//     return obj1;
//   }
  
//   function objectCreator2(a, b, c, d, e, f) {
//     let obj2 = {};
//   obj2=objectCreator1("a","b","c","d","e")
//     obj2.property6 = f;
  
//     return obj2; 
//   }
  
//   console.log(objectCreator2('a', 'b', 'c', 'd', 'e', 'f'));