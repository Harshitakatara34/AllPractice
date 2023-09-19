let promiseOne = new Promise((res, rej)=>{
  
    setTimeout(()=>{
      console.log('Async Task 1')  //1
    }, 1000)
  })
  
  promiseOne.then(()=>{
    console.log('Promise Consumed 1')
  })
  
  promiseOne.catch(()=>{
    console.log('err')
  })
  
  
  //==========================
  
  
  let promiseTwo = new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('Async Task 2')   //2
      res()
    }, 1000)
  })
  
  promiseTwo.then(()=>{
    console.log('Resolved 2')  //3
  })
  
  //=======================
  
  new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('Async Task 3')   //4 
    }, 1000)
    res()
  }).then(()=>{
    console.log('Responce Success 3')  //5 , 1 execute
  }).catch((err)=>{
    console.log('Rejected')
  }).finally(()=> console.log('Both are works resolved and rejected'))
  
  
  //============================
  
  let promiseFour = new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('Async Task 4')  //6
      res({userData: "Aman", age: 23})
    },1000)
  })
  
  promiseFour.then((user)=>{     
    console.log(user)               // {"userData": "Aman","age": 23} 
  })
  
  // who is given res() all show in then
  
  
  //========================
  
  let promiseFive = new Promise((res, rej)=>{
    
    let err=false;
    
    if(!err){
      res({userEmail: "samreen@gmail.com", password:'123'})   
    }else{
      rej('Sonthing Went Wrong')
    }
  
  })
  
  // used two time then to get data. 1 is return promise and second is given data
  promiseFive.then((user1)=>{
    // console.log(user1.userEmail)
    return user1.userEmail    
  }).then((userEmail)=>{
    console.log(userEmail, 'ji')   //"samreen@gmail.com" 'ji'
  }).catch((err)=>{
    console.log('Err')
  })
  
  // used one .then it will not work. used 2 times then 
  
  //================================
  
  // Try Cach .
  // Promise Pending 
  
  let promiseSix = new Promise((res, rej)=>{
    
    setTimeout(()=>{
      let bag = true;
      if(!bag){
      res('Responce bag')
    }else{
      rej('Err will accors in line number 103')
    }
    }, 1000)
    
  })
  
  async function fun(){
    
    let resd = await promiseSix;
    console.log(resd)     
  }    // output - Promise {<pending>},  Uncaught (in promise) Err will accors 
  // error promise pending it will not used the any error handle so it will promise pending state.
    fun()     
  
  
  //===============================
  
    
    //promiseSix - ia an object - promise is an object;  
    // it will work without used async function of setTimeout but the problem is this await work async fun hold so in this side await not works properly.
  // let promiseSix = new Promise((res, rej) => {
  //   let bag = false;
  //   if (!bag) {
  //     res('Response bag');
  //   } else {
  //     rej('Err');
  //   }
  // });
  
  // async function fun() {
  //   let res = await promiseSix;
  //   console.log(res); // Output: 'Response bag'
  // }
  
  // fun();
  
  //==================================
  
  // Promise try catch
  let promiseSeven = new Promise((res, rej)=>{
   setTimeout(()=>{
  let temp = true;
          if(!temp){
              res('Resolved data temp')
          }else{
              rej('Rejected data')
          }
      }, 1000)
    
  })
  
  async function promiseholded (){
        try{
       
       let resp = await promiseSeven;
       console.log(resp)
      }catch(err){
          console.log(err) //Rejected data
          console.log('Wrong')  //Wrong
            // it will given err then show  //Rejected data
            // it will not given err then show //Wrong
      }
  }
  
  promiseholded()   //Promise {fullfill} temp data
  
  
  //==============================
  
  // Promise Resolved
  
  const promiseSeven1 = new Promise((res, rej) => {
    setTimeout(() => {
      let temp = false; // Set temp to false (or any falsy value)
      if (!temp) {
        res('Resolved data temp');
      } else {
        rej('Rejected data');
      }
    }, 1000);
  });
  
  async function promiseHolded1() {
    try {
      let resp = await promiseSeven1;
      console.log(resp);   // Output: Resolved data temp
    } catch (err) {
      console.log(err); 
      console.log('Wrong');
    }
  }
  
  promiseHolded1();
  
  //==============================
  
  // fetch - in try catch
  // two time awat - 1. for res 2. for data to convert json
  // as same .then 2 times
  // await used to hold data in async task 
  // Netwok error 404 is not rejected state - it is fulfill or resolve

  

  //=============================================
  //Pending
//   const pendingPromise = new Promise((resolve, reject) => {
//     // The promise is in a pending state initially
//     console.log("Promise is in a pending state");
//   });

//=====================
//Fullfill
// const fulfilledPromise = new Promise((resolve, reject) => {
//     resolve("Promise fulfilled with success");
//   });
  
//   fulfilledPromise.then((result) => {
//     console.log(result); // Output: "Promise fulfilled with success"
//   });

//======================
//Rejected
// const rejectedPromise = new Promise((resolve, reject) => {
//     reject("Promise rejected with an error");
//   });
  
//   rejectedPromise.catch((error) => {
//     console.error(error); // Output: "Promise rejected with an error"
//   });
  
  