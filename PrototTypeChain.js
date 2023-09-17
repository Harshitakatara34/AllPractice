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
  
//   Object.setPrototypeOf(obj2, obj);
  
//   obj2.sayHello();
  
//   console.log(obj2);










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