// // function getSqrt(num) {
// //     let computedValue = Math.sqrt(num);
// //     if (computedValue) {
// //       return computedValue;    
// //     } else {
// //       return "invalid";
// //     }
// // }

// // getSqrt('4')  // 2

// //undefined - without call
// //  typeof - undefined



// //==========================

// // async function getSqrtPromises(num) {
// //   return new Promise(async function (resolve, reject) {
// //     try {
// //       let computedValue = await Math.sqrt(num);
// //       if (computedValue) {
// //         resolve(computedValue);
// //       } else {
// //         reject("invalid");
// //       }
// //     } catch (err) {
// //       console.log(err);
// //       reject(err); // Reject with the error message
// //     }
// //   });
// // }

// // getSqrtPromises("25")  // Promise {<fulfilled>: 5}
// // undefined//Promise {<rejected>: 'invalid'}

// // with out call - undefined
// // getSqrtPromises() //  Promise {<rejected>: 'invalid'} , Uncaught (in promise) invalid




// //=====================

// // function getSqrtCB(num, resultCb, errCb) {
// //   let computedValue = Math.sqrt(num);
// //   if (computedValue) {
// //     resultCb(computedValue);
// //   } else {
// //     errCb("invalid");
// //   }
// // }
// // let resultCb=(v)=>{
// //     console.log(v)
// // }
// // let errCb=(c)=>{
// //     console.log(c)
// // }
// // getSqrtCB("samreen",resultCb,errCb)   
// // // error -> invalid

// //=========================


// // function curry(func) {
// //   return function curried(...args) {
// //     if (args.length >= func.length) {
// //       return func(...args);
// //     } else {
// //       return function(...moreArgs) {
// //         return curried(...args, ...moreArgs);
// //       };
// //     }
// //   };
// // }

// // function addThreeNumbers(a, b, c) {
// //   return a + b + c;
// // }

// // const curriedAdd = curry(addThreeNumbers);

// // console.log(curriedAdd(1)(2)(3));


// //=======================

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

