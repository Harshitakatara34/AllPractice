// // 1.  normal function point out this value-(in case of objects)

//     let obj = {
//     name: "Samreen",
//     age: 23,

//     greet: function(){
//         return this.name;
//         // console.log( this) - not print
//     }
// }

// console.log(obj.greet(), "line 13") //Samreen



// // 2. Arrow function point out Window object-(in case of objects)

// let obj1 ={
//     name: "Shifa",
//     age: 21,

//     greet1: ()=>{
//         return this.name
//         // console.log(this) - not print
//     }
// }

// console.log(obj1.greet1())

// //==================================================================

// // 3. 


// function fn (){
//     console.log(this)
// }

// fn()   //Window

// //4.

// const fn1 = () =>{
//     console.log(this)
// }

// fn1()   //Window


// //==============================================


// let John = {
//     title: "John",
//     num: 23
// }


// function func(){

//         console.log("func" , this)   //Window
// }



// const func1 = ()=>{

//     console.log("func1" , this)     //Window
// }


// // 5. when call hii function, so John object call - given this ->// John object 

// function hii(){
//  console.log("hii" , this.title, this)   // John, John object
//     func()
//     func1()
       
//     const byee = ()=>{
//         console.log("byee" , this)    //   John object   
//     }

//     byee()   // it is call inside the hii() then arrow function always points the parent hii()

//     function hibye(){
//         console.log("hibye", this)
//     }

//     hibye()   // 
// }

// hii.call(John)   //so John object call - given this ->// John object



// //===========================

// function sayGoodbye() {
//   console.log("Good bye! ", this);
// }

// function sayHello() {
//   console.log("Helloo! ", this);
//   sayGoodbye();
// }

// sayHello();






//==================
// This Keyword call bind apply


// Normal function

// let obj = {
    
//     name: "Samreen",
//     age: "23"
// ,
//     greet:function(){
//       // console.log(`The name is ${this.name} and age is ${this.age}`)
//     }
// }

// 1.
// // obj.greet()  // The name is Samreen and age is 23

// 2.
// // setTimeout(obj.greet.call(obj), 1000) - given error- two time call - 1. call(obj) , 2. setTimeout (because setTimeout is not callback here)

// 3.
// // setTimeout(obj.greet.bind(obj), 1000) // The name is Samreen and age is 23  // it works because bind 1. go to function, because it will works when makes copy, 2. setTimeout call it.

// 4. 
// // setTimeout(obj.greet.bind(), 1000)  // The name is  and age is undefined

// 5. 
// // setTimeout(()=> obj.greet.call(obj))  // The name is Samreen and age is 23 - it is work because it is callback in setTimeout.

// 6.
// // setTimeout(()=> obj.greet.bind(obj))  // The name is Samreen and age is 23 - it is work also because it is callback in setTimeout.

// 7.
// setTimeout(() => obj.greet.apply(obj, [1,2])) // works // The name is Samreen and age is 23



// //==============================================
// // Arrow function


// let obj2 ={
//     name: "Kally",
//     age: 33,
//     fun: ()=>{
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     }
// }

// obj2.fun()    // My name is  and my age is undefined









// // setTimeout(obj2.fun.bind(obj2))   // My name is  and my age is undefined

// // setTimeout(obj2.fun.call(obj2)) // 1.My name is  and my age is undefined , 2. error 

// // setTimeout(obj2.fun.apply(obj2, [1,2])) // 1.My name is  and my age is undefined , 2. error // 




// const per = {
//     name: 'john',
//     age: 30,
//     greet:function(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//   }
// };

// setTimeout(per.greet, 1000);



//=================================

