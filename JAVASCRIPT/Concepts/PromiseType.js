// Promise.all
// If even one promise fails → whole Promise.all fails.

// Promise.allSettled
// Waits for all promises to finish, whether they succeed or fail.

// Promise.race
// Returns the result of the first promise that settles (fulfills or rejects).

// Promise.any
// Returns the first successful promise.
// Rejects only if all promises fail.






























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


//     getUser(id, function(user) {
//   getPosts(user.id, function(posts) {
//     getComments(posts[0], function(comments) {
//       console.log(comments);
//     });
//   });
// });


// getUser(id)
//   .then(user => getPosts(user.id))
//   .then(posts => getComments(posts[0]))
//   .then(comments => console.log(comments))
//   .catch(err => console.error(err));


function stepOne(cb) {
  setTimeout(() => cb("Step 1 done"), 1000);
}
function stepTwo(cb) {
  setTimeout(() => cb("Step 2 done"), 1000);
}
function stepThree(cb) {
  setTimeout(() => cb("Step 3 done"), 1000);
}

stepOne(function(res1) {
  console.log(res1);
  stepTwo(function(res2) {
    console.log(res2);
    stepThree(function(res3) {
      console.log(res3);
    });
  });
});

function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}
stepOne()
  .then((res1) => {
    console.log(res1);
    return stepTwo();
  })
  .then((res2) => {
    console.log(res2);
    return stepThree();
  })
  .then((res3) => {
    console.log(res3);
  })
  .catch((err) => {
    console.error("Error occurred:", err);
  });
