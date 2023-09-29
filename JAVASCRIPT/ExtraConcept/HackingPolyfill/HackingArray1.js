// Make a sayHi polyfill
let arr = ["one", "two", "three"]

Array.prototype.sayHi = function(){
    console.log('Hello I am in Pratapgarh')
}

console.dir(arr)  // sayHi method in prototype chain

console.log(arr.sayHi())  // Hello I am in Pratapgarh



//============================================

// Understanding concept

// This is pollyfill concept - it will make prototype in side browser 
// Array.map , call, bind, reduce etc - all methods in browser 
// Some browser will not supports some fetures of Array like (map, call, filter etc) in 
// priviously that time pollyfill used
// example Priviously internet explorer does not support filter.


