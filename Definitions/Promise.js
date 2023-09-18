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
