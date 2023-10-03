//==========================================================================================

// .call

//==========================================================================================
// 1. 
// let obj  = {
//   name: "samreen",
//   age: 23
// }

// const calFunction = function(a){
//  console.log(`${a}, ${this.name}`)
// }

// obj.calFunction = calFunction;

// obj.calFunction.call(obj, `Hii I am Samreen`)  // "Hii I am Samreen, samreen"


//=========================

//2.

// let person = {
//   name: 'Karan',
//   subject: 'JS',
//   main: function(book){
//     console.log(`I am ${this.name} and My fav subject is ${this.subject}. I love to read ${book} books.`)
//   }
// }

// person.main.call(person, `Romantic`) 
// I am Karan and My fav subject is JS. I love to read Romantic books.


//================================

// 3. 
// function callingMethods(name, age){
//   console.log(`I am ${name}, My age is ${age} years old and Love to eat ${this.fastFood} and ${this.sweet}`)
// }

// callingMethods.call({fastFood: 'Pizza', sweet:"Chacho lava cake"} , 'Suman', "34") 

// "I am Suman, My age is 34 years old and Love to eat Pizza and Chacho lava cake"



//==========================================================================================

// .apply 

//==========================================================================================

// 1.

// working same but second args will []
// const applyFunction = function(subject, sencetive){
//   console.log(`${subject} is dynamically type language and it is ${sencetive}. I love ${this.code}`)
// }

// applyFunction.apply({code:'coding'}, ['javaScript', 'case sencetive'])

// "javaScript is dynamically type language and it is case sencetive. I love coding"

//======================================================

// 2.

// const applyFunction1 = function(subject, sencetive){
//   return (`${subject} is dynamically type language and it is ${sencetive}. I love ${this.code}`)
// }

// let a = applyFunction1.apply({code:'coding'}, ['javaScript', 'case sencetive'])
// console.log(a)
//"javaScript is dynamically type language and it is case sencetive. I love coding"


//===========================================================================================

//.bind()

//============================================================================================

// 1.

// function bindFunction(Animal, meet ){
//   return `This is a ${Animal} and it will eat ${meet} in dinnar at ${this.time}`
// }

// let b = bindFunction.bind({time: '8PM'})
// let bindFun = b(`Tiger`, `deer`)

// console.log(bindFun)  

// "This is a Tiger and it will eat deer in dinnar at 8PM"

//=======================================================

//2.

// let ob = {
//   name: 'Shalu'
// }

// function hii(){
//  return (`This is ${this.name}`)
// }


// let o = hii.bind(ob)  

// console.log(o()) //"This is Shalu"

//===================================================

// let ob = {
//   name: 'Shalu',
//   main : function (){
//     console.log(`Hello ${this.name}`)
//   }
// }


// let h = ob.main.bind(ob)
// h()  // "Hell Shalu"

//=================================================