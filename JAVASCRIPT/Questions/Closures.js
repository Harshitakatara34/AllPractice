// function counter() {
//     let count = 0;
//     return function() {
//       return ++count;
//     };
//   }
//   const increment = counter();
//   console.log(increment()); // 1
//   console.log(increment()); // 2


// ####################=============================########################

function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  console.log(counter1==counter2)  // false because of different references 
  console.log(counter1()); // Output?0
  console.log(counter1()); // Output?1
  console.log(counter2()); // Output?0

//   Reason ---> We create two counters, counter1 and counter2, by calling the makeCounter function twice. 
//   Each call to makeCounter creates a new closure, and each closure has its own count variable. 
//   So, counter1 and counter2 are now two separate functions with their own count variables.