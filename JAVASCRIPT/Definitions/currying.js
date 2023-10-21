// Currying is a functional programming concept where a function that takes multiple arguments 
// is transformed into a series of functions that each take a single argument. 
// This allows for partial function application and more flexible, composable code.

// ex==>const add = (a) => (b) => a + b;
// console.log(add(2)(3))


// function curry(func) {

    
//   return function curried(...args) { 
                                    
//     if (args.length >= func.length) {
//       return func(...args);
//     }
//     else {
//       return function(...moreArgs) { 
//           console.log(...moreArgs)  
//         return curried(...args, ...moreArgs);
//       };               
//     }
//   };
// }

// function addThreeNumbers(a, b, c) {
//   return a + b + c;
// }




// const curriedAdd = curry(addThreeNumbers);
// console.log(curriedAdd(1)(2)(3))


//-----------------------------------------------------------------------------------------------------------------------

//My practice


// 1.

// function curringFun(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return function(e){
//          console.log(a,b,c,d,e)
//         }
//       }
//     }
//   }
// }

//  curringFun(2)(3)(4)(6)(9)

//=============================
//2.

// function curringFun(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return function(e){
//          return (a+b+c+d+e)
//         }
//       }
//     }
//   }
// }


// let c1 = curringFun(2)(3)(4)(6)(9)
// console.log(c1)


//============================
//3.

// const curringFun = (a) => (b) => (c) => (d) => (e) => (a+b+c+d+e)
    


// let c1 = curringFun(2)(3)(4)(6)(9)
// console.log(c1)

//=========================