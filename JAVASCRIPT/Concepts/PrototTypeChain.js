// SetPrototypeOf
// let obj = {
//     name: 'vivek',
//     sayHello: function () {
//       console.log('Hello');
//     }
//   }
  
//   let obj2 = {
//     salary: 100000,
//     work: function () {
//       console.log('Working');
//     }
//   }
  
//   Object.setPrototypeOf(obj2, obj);   obj2._proto_==obj  true
                                        //  obj._proto_=obj2    false
//   obj2.sayHello();
  
//   console.log(obj2);


let obj={}
let obj2={}
console.log(obj===obj2)  //false







// The Object.create() method creates a new object, using an existing object 
// as the prototype of the newly created object.
  //by Object.Create
//   let obj = {
//     name: 'vivek',
//     sayHello: function () {
//       console.log('Hello');
//     }
//   }
  
//   let obj2 = Object.create(obj);  
//   obj will be added as a proto in newly created object that is obj2
//   obj2.salary = 100000;
//   obj2.work = function () {
//     console.log('Working');
//   }
//   console.log(obj2.sayHello());






// Object.assign
// Object.setPrototypeOf() / Object.create()  sets up a prototype chain 
// between the source object and the target object. But, Object.assign() 
// method only copies enumerable and own properties from a source object to a target object.
// let obj = {
//     name: 'vivek',
//     sayHello: function () {
//       console.log('Hello');
//     }
//   }
  
//   let obj2 = {};
  
//   Object.assign(obj2, obj); // doesnot create a chain
  
//   console.log(obj2);



