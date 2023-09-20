// Promise are the javascript object that handles asynchronous Operations
// they have three different states
// 1. pending
// 2. fulfilled
// 3. rejected


let promise = new Promise((res, rej) => {
  let temp = true;
  if (temp) {
    res("resolved");
  } else {
    rej("error");
  }
});
promise.then(()=>console.log("Resolved")).catch((err)=>console.log(err))


// async and await enhance code quality, readability, and maintainability in 
// asynchronous JavaScript programming, making it a valuable addition to the 
// language for handling asynchronous operations.


async function getData(){
    try{
        let data=await fetch("")
        let res= await data.json()
    }
    catch(err){
        console.log(err)
    }
}
getData()


//================

// try catch 
//try...catch is suitable for handling errors in synchronous operations, like regular function calls and non-asynchronous code.

// try {
//   // Synchronous code that might throw an error
//   throw new Error("An error occurred");
// } catch (error) {
//   console.error("Caught an error:", error.message);
// }



// async await 

// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     // Handle successful data retrieval
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle the error
//   }
// }


// difference bt try catch and .then and .catch

//Use try...catch for synchronous code where errors are expected to occur within a specific block.
//                                 or
// Use .then().catch() with Promises for handling asynchronous operations, as it's the idiomatic way to work with async code in JavaScript.