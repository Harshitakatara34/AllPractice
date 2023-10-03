//Questions 

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let newArr = /* your code here */

/*
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/

//=================================================

// solutions 


// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let newArr = users.reduce((acc, item)=>{
  
//   acc[item.name] = item.id
//   return acc
// }, {})

// console.log(newArr)


    
    
//*********************************************************************************

// Question 


// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // [16, 20, 23, 30]

// let newArr = users.reduce((acc, item)=> {
//   // iteration 2 - acc: [16]
//   // iteration 2 - item: {age: 20}

//   return acc;
// },[])


// // let newArr = users.map((item) => {
// //   return item.age * 2;
// // });



// console.log(newArr); // [16,20,23,30]

/*
Problem Statement: 

Use proper array method such that the newArr becomes: 
 [16,20,23,30]
 
The newArr is simply an array of numbers, in this problem the ages of the users. 
*/


//=========================================================

//Solution


// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // [16, 20, 23, 30]

// let newArr = users.reduce((acc, item)=> {

//   acc.push(item.age)
  
//   return acc;
// },[])


// // let newArr = users.map((item) => {
// //   return item.age * 2;
// // });



// console.log(newArr); // [16,20,23,30]

//========================================================

// solution 2 (using map)


// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // [16, 20, 23, 30]

// let newArr = users.map((item)=>{
//   return item.age
// })


// // let newArr = users.map((item) => {
// //   return item.age * 2;
// // });



// console.log(newArr); // [16,20,23,30]




//*************************************************************************

//Question 

// let data = [
//   { name: "John", subject: "Javascript" },
//   { name: "John", subject: "HTML" },
//   { name: "John", subject: "CSS" },
//   { name: "Pete", subject: "Java" },
//   { name: "Pete", subject: "English" },
//   { name: "Pete", subject: "Maths" },
//   { name: "Mary", subject: "Rust" },
//   { name: "Mary", subject: "Elm" },
// ]

// let subjectHash = data.reduce((acc, item) => {
//   // iteration 1 - acc: {}
//   // iteration 1 - item: { name: "John", subject: "Javascript" }

  
  
//   // iteraction 1 - acc:
//   return acc;
// }, {})

// console.log(subjectHash);
// /*
// Expected output:
// {
//   John: ["Javascript", "HTML", "CSS"],
//   Pete: ["Java", "English", "Maths"],
//   Mary: ["Rust", "Elm"]
// }
// */

// /*
//  - Use proper array methods to create an object from the data arrray.
//  - from the data, the name would become the key of the new object.
//  - keys must be unique, one key per user.
//  - the value would be an array of their subjects.
// */



//=======================================

// Solution

// let data = [
//   { name: "John", subject: "Javascript" },
//   { name: "John", subject: "HTML" },
//   { name: "John", subject: "CSS" },
//   { name: "Pete", subject: "Java" },
//   { name: "Pete", subject: "English" },
//   { name: "Pete", subject: "Maths" },
//   { name: "Mary", subject: "Rust" },
//   { name: "Mary", subject: "Elm" },
// ]

// let subjectHash = data.reduce((acc, item) => {

// // acc[item.name] = [];
//   if(acc[item.name] ){
//     acc[item.name].push(item.subject)
//   }else{
//     acc[item.name] = [item.subject]
//   }
  
//   return acc;
// }, {})

// console.log(subjectHash);


// // Expected output:
// // {
// //   John: ["Javascript", "HTML", "CSS"],
// //   Pete: ["Java", "English", "Maths"],
// //   Mary: ["Rust", "Elm"]
// // }


//***************************************************************************************

//Question


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /* 
// end result/sample output: 
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped);    
// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // John Smith

// /*
//  form a new array using the users array
//  the new array is expected to have objects with the following properties:
//   - fullName: <name><space><surname> 
//   - id: <id>
//  check the end result / sample output in the comment above. 
// */



//===============================================================

//Solution

 
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// // let users = [
// //   { name: "John", surname: "Smith", id: 1 },
// //    { name: "Pete", surname: "Hunt", id: 2 },
// //   { name: "Mary", surname: "Key", id: 3 }
// // ]



// let usersMapped = users.reduce((acc, item)=>{
  
//   acc.push({fullName:`${item.name} ${item.surname}`, id: item.id})
  
//   return acc
  
// },[])
    
    
    
// // /* 
// // end result/sample output: 
// // usersMapped = [
// //   { fullName: "John Smith", id: 1 },
// //   { fullName: "Pete Hunt", id: 2 },
// //   { fullName: "Mary Key", id: 3 }
// // ]
// // */

// console.log(usersMapped);    
// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // John Smith




//****************************************************************************************

// Question

// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`
// }


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersGreetings = /* your code here */  

// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]

// /*
//   Use of the array functons to manipulate the users array. We need a new array called usersGreetings.
//   usersGreetings will be an array of strings: ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
//   You are expected to use the getGreeting function inside the callback of the array method that you choose to use.
// */



//===================================================================================================


// Question

// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`
// }


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersGreetings = users.reduce((acc, item)=>{
  
//    acc.push(getGreeting(item.name, item.surname))
  
//   return acc
  
// },[])
    
    

// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]


//===============================================

//Solution 2


// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`
// }


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersGreetings = users.map((item)=>{
  
//   return getGreeting(item.name, item.surname)

// })
    
    

// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]



//****************************************************************************************************

//Question

// let subjectsHash = {
//   1: 'Javascript',
//   2: 'HTML',
//   3: 'CSS',
//   4: 'Java',
//   5: 'Rust',
// }

// let students = [
//   {id: 1, name: 'Prateek', subjectID: 5},
//   {id: 2, name: 'Yogesh', subjectID: 2},
//   {id: 3, name: 'Nrupul', subjectID: 4},
//   {id: 4, name: 'Prateek', subjectID: 1},
// ]

// let newObj = /* your code here */

// console.log(newObj);

// /* 
// ----------------------------------
// create a new object called `newObj` using the `students` array &  
// the `subjectsHash` object.
// ----------------------------------

// Expected Output of `newObj`: 
// {
//   Prateek: ["Rust", "Javascript"],
//   Yogesh: ["HTML"],
//   Nrupul: ["Java"],
// }
// */


//========================================================================

//Solution 

// let subjectsHash = {
//   1: 'Javascript',
//   2: 'HTML',
//   3: 'CSS',
//   4: 'Java',
//   5: 'Rust',
// }

// let students = [
//   {id: 1, name: 'Prateek', subjectID: 5},
//   {id: 2, name: 'Yogesh', subjectID: 2},
//   {id: 3, name: 'Nrupul', subjectID: 4},
//   {id: 4, name: 'Prateek', subjectID: 1},
// ]

// let newObj = students.reduce((acc, item)=>{
  
  
// //  acc[item.name] = [];
// //  acc[item.name].push(item.subjectID)
                     
//   const subject = subjectsHash[item.subjectID]
  
//  if(acc[item.name]){
   
//    acc[item.name].push(subject)
//  }else{
//      acc[item.name] = [subject]
//  }
  
//   return acc
  
// },{})

// console.log(newObj);
// /* 
// Expected Output of `newObj`: 
// {
//   Prateek: ["Rust", "Javascript"],
//   Yogesh: ["HTML"],
//   Nrupul: ["Java"],
// }
// */


//=========================================================================

//Question 

// let subjectsData = [
//   {id: 1, name: 'Javascript'},
//   {id: 2, name: 'HTML'},
//   {id: 3, name: 'CSS'},
//   {id: 4, name: 'Java'},
//   {id: 5, name: 'Rust'},
// ]

// // code your key-value object for subjects here

// let students = [
//   {id: 1, name: 'Prateek', subjectID: 5},
//   {id: 2, name: 'Yogesh', subjectID: 2},
//   {id: 3, name: 'Nrupul', subjectID: 4},
//   {id: 4, name: 'Prateek', subjectID: 1},
// ]

// let newObj = /* your array method here */ 

// console.log(newObj);

// /* 
// ----------------------------------
// create a new object called `newObj` using the `students` array &  
// the `subjectsData` array.

// Hint: consider creating an extra key-value object for quickly accessing subject names
// ----------------------------------

// Expected Output of `newObj`: 
// {
//   Prateek: ["Rust", "Javascript"],
//   Yogesh: ["HTML"],
//   Nrupul: ["Java"],
// }
// */



//==================================================================

//Solution - not solved 

let subjectsData = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'Rust'},
  ]
  
  // code your key-value object for subjects here
  
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  
  
  let newObj =  students.reduce((acc,item)=>{
    
    // acc[item.name] = []
    
     const subject  = subjectsData[item.id]
    
    if(acc[item.name]){
       acc[item.name].push(subject)
    }else{
      acc[item.name] = [subject]
    }
    
    return acc;
  },{})
  
  console.log(newObj);
  /* 
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */
  
  
  
  
  