// let promise=new Promise((res,rej)=>{
//     let data=true
//     if(!data){
//       res("resolve")
//     }
//     else{
//       rej("rejected")
//     }
//   })
//   console.log(promise)
// Output
// Promise {<rejected>: 'rejected'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "rejected"
// [[PromiseResult]]
// : 
// "rejected"


// #######################################+++++++++++++++++++++#######################################3

///Pending State

// let promise = new Promise((res, rej) => {
//     // This Promise is intentionally left in a "Pending" state.
//   });
  
//   // Log the Promise object to observe the "Pending" state
//   console.log("Promise object (Pending):", promise);
  




//   ###############################################///////////////////##########################


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
  });
  
  promise.then((value) => console.log(value));
  
  setTimeout(() => console.log("Timeout!"), 500);
  // Timeout
  // Resolved
  



//   ###########################=================================================##################

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Rejected!"), 1000);
//   });
  
//   promise
//     .then((value) => console.log("Resolved:", value))
//     .catch((error) => console.log("Error:", error));
  
//   setTimeout(() => console.log("Timeout!"), 500);
//Timeout
//Error:Rejected



// ######################3============================================###################################
// Promise Chaining
// const promise = new Promise((resolve) => resolve(5));

// promise
//   .then((value) => value * 2)
//   .then((value) => value + 3)
//   .then((value) => value - 1)
//   .then((result) => console.log(result));
// output=12

  