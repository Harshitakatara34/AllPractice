// Make a sayHi polyfill
let arr = ["one", "two", "three"]

Array.prototype.sayHi = function(){
    console.log('Hello I am in Pratapgarh')
}

console.dir(arr)  // sayHi method in prototype chain

console.log(arr.sayHi())