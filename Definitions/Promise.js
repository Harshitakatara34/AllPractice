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