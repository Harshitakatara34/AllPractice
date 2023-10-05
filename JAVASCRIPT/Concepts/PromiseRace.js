// const promise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('one'), 1000);
    //   });
      
    //   const promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('two'), 2000);
    //   });
      
    //   Promise.race([promise1, promise2])
    //     .then(result => console.log(result));
      
    // A) "one"
    // B) "two"
    // C) "one" and then "two"
    // D) "two" and then "one"
    
    // Answer: A) "one"
    
    // Explanation: Promise.race resolves with the first promise that is resolved, so it logs "one" when promise1 resolves after 1000ms.